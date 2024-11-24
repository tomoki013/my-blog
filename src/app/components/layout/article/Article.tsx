import styles from "./Article.module.css";

type BlogArticleProps = {
  title: string;
  date: string;
  place: string;
  content: string;
};

export default function BlogArticle({ title, date, place, content }: BlogArticleProps) {
  return (
    <article className={styles.article}>
      <h2 className={styles.blog_title}>{title}</h2>
      <hr />
      <p className={styles.place}>{place}</p>
      <p className={styles.blog_date}>{date}</p>
      <div className={styles.blog_image}></div>

      <div className={styles.blog_doc}>
        <section className={styles.blog_text}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </div>
    </article>
  );
}
