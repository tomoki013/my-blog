import Link from "next/link";
import styles from "./Navigation.module.css";

type NavigationProps = {
  prevPost?: { slug: string };
  nextPost?: { slug: string };
};

export default function Navigation({ prevPost, nextPost }: NavigationProps) {
  return (
    <nav className={styles.guidance}>
      {/* 前のブログへのリンク */}
      {prevPost ? (
        <Link className={styles.prev_blog} href={`/post/diary/${prevPost.slug}`}>
          ＜＜前のブログへ
        </Link>
      ) : (
        <span className={`${styles.disabled_link} ${styles.prev_blog}`}>＜＜前のブログへ</span>
      )}

      {/* ブログ一覧へ */}
      <Link className={styles.blog_top} href="/">ブログ一覧へ</Link>

      {/* 次のブログへのリンク */}
      {nextPost ? (
        <Link className={styles.next_blog} href={`/post/diary/${nextPost.slug}`}>
          次のブログへ＞＞
        </Link>
      ) : (
        <span className={`${styles.disabled_link} ${styles.next_blog}`}>次のブログへ＞＞</span>
      )}
    </nav>
  );
}
