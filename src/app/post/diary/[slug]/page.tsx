import Link from "next/link";
import styles from "./page.module.css";
{/* import Rec_blog from "@/app/components/layout/rec_blog/Rec_blog"; */}
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const { prevPost, nextPost } = getAdjacentPosts(params.slug);

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
        <h1 className={styles.blog_title}>{post.title}</h1><hr/>
        <p className={styles.place}>{post.place}</p>
        <p className={styles.blog_date}>{post.date}</p>
        <div className={styles.blog_image}></div>

        {/* 本文 */}
        <div className={styles.blog_doc}>
          <h2 className={styles.sub_title}></h2><hr/>
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

    </div>

    {/* 右サイドのスタイルを整えるためのスペース */}
    <div className={styles.right_side_margin}></div>

    {/* 右サイドのコンテンツ
    <Rec_blog/>
    */}

  </main>
  );
}

