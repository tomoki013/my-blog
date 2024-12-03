import styles from "./page.module.css";
import { getAllDiaries, getDiaryBySlug, getAdjacentDiaries } from "@/lib/posts";
import Rec_blog from "@/app/components/layout/rec_blog/Rec-blog";
import Navigation from "@/app/components/layout/navigation/Navigation";
import Article from "@/app/components/layout/article/Article";
import Profile from "@/app/components/layout/profile/Profile";
import SmallScreenFooter from "@/app/components/layout/footer/SmallScreenFooter";
import DesktopScreenFooter from "@/app/components/layout/footer/DesktopScreenFooter";

export async function generateStaticParams() {
  const posts = await getAllDiaries();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamic = 'force-dynamic';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    throw new Error("params.slug が存在しません");
  }

  // slug を処理
  const post = await getDiaryBySlug(params.slug);
  const { prevPost, nextPost } = await getAdjacentDiaries(params.slug); // こちらも await 必須か確認

  return (
    <>
      <main className="md:flex">

        <div className={styles.maincontent}>
          {/* ガイダンス */}
          <Navigation prevPost={prevPost} nextPost={nextPost} />

          {/* ブログ記事 */}
          <Article
            title={post.title}
            date={post.date}
            place={post.place}
            image={post.image}
            alt={post.alt}
            content={post.content}
          />

          {/* プロフィール */}
          <Profile />

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
