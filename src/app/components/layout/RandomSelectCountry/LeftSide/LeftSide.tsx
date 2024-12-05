import React from "react";
import Link from "next/link";
import styles from "@/app/components/layout/RandomSelectCountry/LeftSide/LeftSide.module.css";

type Country = {
    name: string;
    comment: string;
}

type LeftSideProps = {
    selectedPlace: Country | null;
    isLoading: boolean;
}

const LeftSide: React.FC<LeftSideProps> = ({ selectedPlace, isLoading }) => {
  return (
    <div className="flex flex-col space-y-4">
      {isLoading ? (
        <p><span className={styles.loading}>.</span><span className={styles.loading}>.</span><span className={styles.loading}>.</span></p>
      ) : selectedPlace ? (
        <div>
          <p className="text-lg">
            {selectedPlace.name}
          </p>
        </div>
      ) : (
        <p>スタートボタンを押してね</p>
      )}

      {/* 注意喚起 */}
      <div>
        <p>海外旅行に出発する前には、<Link href="https://www.anzen.mofa.go.jp/" className="text-blue-800 underline">外務省の海外安全ホームページ</Link>を必ず確認し、最新の渡航情報を把握してください。現地の治安状況や危険情報を確認し、安全対策を講じることが重要です。また、旅行保険の加入や予防接種の確認も忘れずに行いましょう。安全第一で、万全の準備を整えてください。</p>
      </div>

    </div>
  );
};

export default LeftSide;
