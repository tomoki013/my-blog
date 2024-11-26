import styles from "./Article.module.css";
import Image from "next/image";

type BlogArticleProps = {
  title: string;
  date: string;
  place: string;
  image: string;
  alt: string;
  content: string;
};

export default function BlogArticle({ title, date, place, image, alt, content }: BlogArticleProps) {
  return (
    <article className={styles.article}>
      <h2 className={styles.blog_title}>{title}</h2>
      <hr />
      <p className={styles.place}>{place}</p>
      <p className={styles.blog_date}>{date}</p>
      <div className={styles.blog_image}>
        <Image
          src={image}
          alt={alt}
          width={1}
          height={1}
          layout="responsive"
          className={styles.blog_img}
        />
      </div>

      <div className={styles.blog_doc}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      
    </article>
  );
}
