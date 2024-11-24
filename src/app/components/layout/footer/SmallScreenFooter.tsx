"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; // CSS モジュールを使う例

const SmallScreenFooter: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pagetopOpacity, setPagetopOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      const newPagetopOpacity = Math.min(0.7, scrollY / 200);
      setPagetopOpacity(newPagetopOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePagetopHover = (hover: boolean) => {
    if (hover) {
      setPagetopOpacity(0.5);
    } else {
      setPagetopOpacity(Math.min(0.7, scrollPosition / 200));
    }
  };

  return (
    <footer className={`${styles.footer} ${styles.small_screen_footer}`}>
      <p>&copy; 2024 Tomokichi Travel</p>

      {/* フッターメニュー */}
      <nav className={styles.footer_nav} aria-label="フッターメニュー">
        <ul className={styles.footer_nav_list}>
          <li className={styles.footer_nav_item}>
            <Link href="/">
                トップページ
            </Link>
          </li>
          <li className={styles.footer_nav_item}>
            <Link href="/domestic">
              国内旅行
            </Link>
          </li>
          <li className={styles.footer_nav_item}>
            <Link href="/oversea">
              海外旅行
            </Link>
          </li>
          <li className={styles.footer_nav_item}>
            <Link href="/info">
              観光情報
            </Link>
          </li>
          <li className={styles.footer_nav_item}>
            <Link href="/contact">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>

    {/* ページトップボタン */}
    <Link
        href="#"
        className={styles.pagetop}
        style={{ opacity: pagetopOpacity }}
        aria-label="ページトップボタン"
        onMouseEnter={() => handlePagetopHover(true)}
        onMouseLeave={() => handlePagetopHover(false)}
    >
        <p>＞</p>
    </Link>
      
    </footer>
  );
};

export default SmallScreenFooter;
