import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const diaries = getAllPosts();
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
        {diaries.map((diary) => (
          <li key={diary.slug}>
            <Link href={`/post/diary/${diary.slug}`}>{diary.title}</Link>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
}
