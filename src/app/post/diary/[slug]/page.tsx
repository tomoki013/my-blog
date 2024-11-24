import styles from "./page.module.css";
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import Rec_blog from "@/app/components/layout/rec_blog/Rec-blog";
import Navigation from "@/app/components/layout/navigation/Navigation";
import Article from "@/app/components/layout/article/Article";
import SmallScreenFooter from "@/app/components/layout/footer/SmallScreenFooter";
import DesktopScreenFooter from "@/app/components/layout/footer/DesktopScreenFooter";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamic = 'force-dynamic';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const { prevPost, nextPost } = await getAdjacentPosts(params.slug);

  return (
    <>
      <main className={styles.main}>

        <div className={styles.maincontent}>
          {/* ガイダンス */}
          <Navigation prevPost={prevPost} nextPost={nextPost} />

          {/* ブログ記事 */}
          <Article
            title={post.title}
            date={post.date}
            place={post.place}
            content={post.content}
          />

          {/* ガイダンス（再度表示） */}
          <Navigation prevPost={prevPost} nextPost={nextPost} />

          <DesktopScreenFooter />

        </div>

        <hr />

        {/* 右サイドのスタイルを整えるためのスペース */}
        <div className={styles.right_side_margin}></div>

        {/* 右サイドのコンテンツ */}
        <Rec_blog />

      </main>

      <SmallScreenFooter />

    </>
  );
}
