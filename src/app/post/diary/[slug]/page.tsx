import Link from "next/link";
import styles from "./page.module.css";
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import Rec_blog from "@/app/components/layout/rec_blog/Rec_blog";

export async function generateStaticParams() {
  const posts = await getAllPosts(); // 非同期対応
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug); // 非同期対応
  const { prevPost, nextPost } = await getAdjacentPosts(params.slug); // 非同期対応
  return (
    <main className={styles.main}>

    {/* メインコンテンツ部分*/}
    <div className={styles.maincontent}>

      {/* ガイダンス */}
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


      {/* ブログ */}
      <article className={styles.article}>
        <h2 className={styles.blog_title}>{post.title}</h2><hr/>
        <p className={styles.place}>{post.place}</p>
        <p className={styles.blog_date}>{post.date}</p>
        <div className={styles.blog_image}></div>

        {/* 本文 */}
        <div className={styles.blog_doc}>
          <section className={styles.blog_text}><div dangerouslySetInnerHTML={{ __html: post.content }} /></section>
        </div>

      </article>

      {/* ガイダンス */}
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

    </div><hr />

    {/* 右サイドのスタイルを整えるためのスペース */}
    <div className={styles.right_side_margin}></div>

    {/* 右サイドのコンテンツ*/}
    <Rec_blog/>

  </main>
  );
}

