"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; // CSS モジュールを使う例
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
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
  
  const pathname = usePathname();

  if (pathname.includes('/diary') || pathname.includes('/info')) {
    return null; // '/diary' または '/info' を含むページでは Footer を表示しない
  }
  

  return (
    <footer className={styles.footer}>
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

export default Footer;
