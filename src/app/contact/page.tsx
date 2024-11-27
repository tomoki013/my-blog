import styles from "./page.module.css";
import SiteRule from "../components/layout/site-rule/SiteRule";

export default function Home() {
  return (
    <main className={styles.main}>
      <SiteRule />
    </main>
  );
};
