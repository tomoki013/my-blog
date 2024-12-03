import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { FrontMatter } from './types';

const directories = {
  diary: path.join(process.cwd(), 'src/posts/diary'),
  info: path.join(process.cwd(), 'src/posts/info'),
};

// 共通関数: ファイルを取得してパース
const getAllPosts = (directory: string) => {
  const fileNames = fs.readdirSync(directory);
  return fileNames
    .map((fileName) => {
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents) as GrayMatterFile<string> & { data: FrontMatter };
      return {
        slug: fileName.replace(/\.md$/, ''),
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 共通関数: スラグで特定のポストを取得
const getPostBySlug = async (slug: string, directory: string) => {
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents) as GrayMatterFile<string> & { data: FrontMatter };

  if (!data.title || !data.date) {
    throw new Error(`Missing required fields in slug: ${slug}`);
  }

  const htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    content: String(htmlContent),
    ...data,
  };
};

// 共通関数: 前後のポストを取得
const getAdjacentPosts = (slug: string, getAll: () => { slug: string }[]) => {
  const posts = getAll();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    throw new Error(`Post with slug: ${slug} not found`);
  }

  return {
    prevPost: posts[currentIndex - 1] || null,
    nextPost: posts[currentIndex + 1] || null,
  };
};

// 日記関連関数
export const getAllDiaries = () => getAllPosts(directories.diary);
export const getDiaryBySlug = (slug: string) => getPostBySlug(slug, directories.diary);
export const getAdjacentDiaries = (slug: string) => getAdjacentPosts(slug, getAllDiaries);

// 情報関連関数
export const getAllInfos = () => getAllPosts(directories.info);
export const getInfoBySlug = (slug: string) => getPostBySlug(slug, directories.info);
export const getAdjacentInfos = (slug: string) => getAdjacentPosts(slug, getAllInfos);
