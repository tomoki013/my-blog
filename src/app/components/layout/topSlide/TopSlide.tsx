import styles from "@/app/components/layout/topSlide/TopSlide.module.css";

export default function TopSlide() {
    return (
        <div className="w-[100%] h-[100%] relative overflow-hidden z-[calc(var(--header-z-index)-2)] max-w-full">
            <div className={styles.img_01}></div>
            <div className={styles.img_02}></div>
            <div className={styles.img_03}></div>
        </div>
    )
}