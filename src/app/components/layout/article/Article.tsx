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
    <article className="pt-[10px] pb-[40px] bg-white text-[var(--text-color)] md:rounded-xl md:m-4">
      <h2 className="mb-0 pb-0 text-center">{title}</h2>
      <hr />
      <p className={styles.place}>{place}</p>
      <p className={styles.blog_date}>{date}</p>
      <div className="flex justify-center my-4">
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
