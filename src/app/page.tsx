import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/diary/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
}
