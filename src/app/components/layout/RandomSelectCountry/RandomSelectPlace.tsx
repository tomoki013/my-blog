"use client";

import { useState } from "react";
import LeftSide from "@/app/components/layout/RandomSelectCountry/LeftSide/LeftSide";
import RightSide from "@/app/components/layout/RandomSelectCountry/RightSide/RightSide";

type Country = {
  name: string;
  comment: string;
};

const RondomSelectPlace = () => {
  const [Placies] = useState<Country[]>([
    { name: "日本", comment: "四季折々の自然と美味しい料理が楽しめます。" },
    { name: "タイ", comment: "微笑みの国で異文化体験を楽しみましょう。" },
    { name: "インド", comment: "歴史とスパイスの国。" },
  ]);
  const [selectedPlace, setSelectedPlace] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleStartRoulette = (): void => {
    if (Placies.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * Placies.length);
        setSelectedPlace(Placies[randomIndex]);
        setIsLoading(false);
      }, 3500);
    } else {
      alert('国を追加してください');
    };
  };

  return (
    <div className="bg-white text-center mx-4 my-4 p-8 pt-3">
      <h2>旅行先ルーレット</h2><hr />
      <button 
          className="m-4 text-[var(--text-color)] bg-[var(--main-bg-color)] border border-solid border-[var(--color-three)] rounded-md cursor-pointer py-2 px-4"
          onClick={handleStartRoulette}
          >
          スタート
      </button>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-6">
        <LeftSide
          selectedPlace={selectedPlace}
          isLoading={isLoading}
        />
        <div className="bg-black"></div>
        <RightSide
          Placies={Placies}
          onAddPlace={() => {}}
          onDeletePlace={() => {}}
          onClearPlacies={() => {}}
        />
      </div>
    </div>
  );
};

export default RondomSelectPlace;
