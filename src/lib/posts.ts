import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { FrontMatter } from './types';
{/*import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit'; // 名前付きエクスポート
import { Root, Element } from 'hast';*/}


const postsDirectory = path.join(process.cwd(), 'src/posts');

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents) as GrayMatterFile<string> & { data: FrontMatter };

      return {
        slug: fileName.replace(/\.md$/, ''),
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents) as GrayMatterFile<string> & { data: FrontMatter };

  if (!data.title || !data.date) {
    throw new Error(`Missing required fields in slug: ${slug}`);
  }

  // マークダウンをHTMLに変換
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


export const getAdjacentPosts = (slug: string) => {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    throw new Error(`Post with slug: ${slug} not found`);
  }

  const prevPost = posts[currentIndex - 1] || null;
  const nextPost = posts[currentIndex + 1] || null;

  return { prevPost, nextPost };
};
