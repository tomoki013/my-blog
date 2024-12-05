import { getAllDiaries } from "@/lib/posts";
import Link from "next/link";
import styles from "@/app/components/layout/Displaydiary/Displaydiary.module.css";
import Image from "next/image";

interface BlogLink1Props {
    displayCount?: number;
}

export default function BlogLink1({displayCount}: BlogLink1Props) {
    const diaries = getAllDiaries();

    const count = displayCount || diaries.length;

    return (
        <div className="bg-white rounded-xl my-4 md:m-4 p-4">
            <h2 className="text-center">ブログ一覧</h2><hr />
            <ul className="flex flex-wrap justify-center">
                {diaries.slice(0, count).map((diary) => (
                    <li key={diary.slug} className={styles.item_1}>
                        <Link href={`/post/diary/${diary.slug}`}>
                            <Image 
                                src={diary.image}
                                alt={diary.alt}
                                width={180}
                                height={150}
                                className={styles.blog_display_img}
                            />
                            <hr />
                            <p>{diary.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <nav className="flex justify-center">
                <Link href="/domestic" className="mx-8 text-[var(--color-one)] underline">国内旅行 ＞＞</Link>
                <Link href="/oversea" className="mx-8 text-[var(--color-one)] underline">海外旅行 ＞＞</Link>
            </nav>
        </div>
    );
};
