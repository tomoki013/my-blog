import styles from "./Rec-blog.module.css";

const Rec_blog: React.FC = () => {
    return (
        <aside className={styles.right_side}>

            {/* 最新のブログ*/}
            <div>
                <h2 className={styles.rec_text}>最新のブログ</h2>
                <ul className={styles.new_blog_list}>
                    {/* 最新のブログをここに表示*/}
                </ul>
            </div>

            {/* おすすめのブログ*/}
            <div>
                <h2 className={styles.rec_text}>おすすめのブログ</h2>
                <ul className={styles.rec_blog_list}>
                    {/* おすすめのブログをここに表示*/}
                </ul>
            </div>

        </aside>
    )
}

export default Rec_blog;