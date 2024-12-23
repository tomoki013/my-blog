"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // CSSモジュールを使用
import classNames from "classnames"; // classnamesを使用してクラスを動的に切り替える

const Header: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [headerOpacity, setHeaderOpacity] = useState<number>(1);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuIconRef = useRef<HTMLDivElement | null>(null);

  // 時刻を更新する関数
  const updateDateTime = useCallback(() => {
    const datetime = new Date();
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    const dateStr = `${datetime.getFullYear()}/${
      (datetime.getMonth() + 1).toString().padStart(2, "0")
    }/${datetime.getDate().toString().padStart(2, "0")}(${
      daysOfWeek[datetime.getDay()]
    })`;
    const timeStr = `${datetime.getHours()}:${datetime
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${datetime.getSeconds().toString().padStart(2, "0")}`;
    setDate(dateStr);
    setTime(timeStr);
  }, []);

  // 時刻更新のインターバル設定
  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, [updateDateTime]);

  // スクロール時にヘッダーの透明度を設定
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHeaderOpacity(Math.max(0.5, 1 - scrollPosition / 500));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニューの開閉を切り替える
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      // スクロール無効化の切り替え
      if (!prev) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return !prev;
    });
  }, []);

  // メニュー外をクリックした際にメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
        document.body.classList.remove("no-scroll"); // スクロールを元に戻す
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll"); // コンポーネントのアンマウント時にも復元
    };
  }, []);

  return (
    <header>
      <div
        className={styles.opacity_header}
        style={{ opacity: headerOpacity }}
      >
        {/* 時刻表示 */}
        <div className={styles.time_wrapper}>
          <div>{date}</div>
          <div>{time}</div>
        </div>

        {/* タイトル */}
        <h1 className="text-white">ともきちの旅行ブログ</h1>

        {/* ハンバーガーメニュー */}
        <div
          ref={menuIconRef} // メニューアイコンを参照
          className={classNames(styles.hambarger, {
            [styles.active]: isMenuOpen,
          })}
          onClick={toggleMenu}
          aria-label="メニューアイコン"
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <span className={styles.menu_text}>{isMenuOpen ? "close" : "menu"}</span>
        </div>
      </div>

      <nav
        ref={menuRef} // メニュー全体を参照
        className={classNames(styles.navmenu, {
          [styles.active]: isMenuOpen,
          [styles.inactive]: !isMenuOpen,
        })}
      >
        <h3 className={styles.menu_title}>MENU</h3>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <Link onClick={toggleMenu} href="/">トップページ</Link>
          </li>
          <li className={styles.menu_item}>
            <Link onClick={toggleMenu} href="/info">観光情報</Link>
          </li>
          <li className={styles.menu_item}>
            <Link onClick={toggleMenu} href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
