import styles from "@/app/components/layout/displayInfo/DisplayInfo.style.module.css";
import { getAllInfos } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

interface DisplayInfoProps {
    displayCount?: number;
}

export default function DisplayInfo({displayCount}: DisplayInfoProps) {
    const infos = getAllInfos()

    const count = displayCount || infos.length;

    return (
        <div className="bg-white rounded-xl my-4 md:m-4 p-4 ">
            <h2 className="text-center">観光情報</h2><hr />
            <ul className="flex flex-wrap justify-center p-0">
                {infos.slice(0, count).map((info) => (
                    <li key={info.slug} className={styles.item_1}>
                        <Link href={`/post/info/${info.slug}`}>
                            <Image 
                                src={info.image}
                                alt={info.alt}
                                width={180}
                                height={150}
                                className={styles.blog_display_img}
                            />
                            <hr />
                            <p>{info.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/info" className={styles.useful_info_top}>一覧へ ＞＞</Link>
        </div>
    )
}