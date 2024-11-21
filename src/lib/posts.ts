import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { FrontMatter } from './types';  // FrontMatter型をインポート

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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 日付降順にソート
};

export const getPostBySlug = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // GrayMatterFile<string> & { data: FrontMatter } 型にキャスト
  const { data, content } = matter(fileContents) as GrayMatterFile<string> & { data: FrontMatter };
  
  // 必須フィールドが存在するかを確認
  if (!data.title || !data.date) {
    throw new Error(`Missing required fields in slug: ${slug}`);
  }
  
  return {
    slug,
    content,
    ...data,  // FrontMatter型としてdataを展開
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

