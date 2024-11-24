import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import styles from "@/app/components/layout/bloglink-style-1/BlogLinkStyle1.module.css";
import Image from "next/image";

interface BlogLink1Props {
    displayCount?: number;
}

export default function BlogLink1({displayCount}: BlogLink1Props) {
    const diaries = getAllPosts();

    const count = displayCount || diaries.length;

    return (
        <ul>
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
    );
};
