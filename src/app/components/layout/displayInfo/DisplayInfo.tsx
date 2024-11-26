import styles from "@/app/components/layout/displayInfo/DisplayInfo.style.module.css";
import Link from "next/link";

export default function DisplayInfo() {
    return (
        <div className={styles.useful_info}>
            <h2>観光情報</h2><hr />
            <ul className={styles.useful_info_list}>
            </ul>
            <Link href="/info" className={styles.useful_info_top}>一覧へ ＞＞</Link>
        </div>
    )
}