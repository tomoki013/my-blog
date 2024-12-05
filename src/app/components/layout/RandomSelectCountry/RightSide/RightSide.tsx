"use client";

import React, { useState } from "react";

type Place = {
    name: string;
    comment: string;
};
  
type RightSideProps = {
    Placies: Place[];
    onAddPlace: (PlaceName: string) => void;
    onDeletePlace: (index: number) => void;
    onClearPlacies: () => void;
};

const RightSide: React.FC<RightSideProps> = ({
    Placies,
    onAddPlace,
    onDeletePlace,
    onClearPlacies,
}) => {
  const [newPlace, setNewPlace] = useState("");

  const handleAdd = () => {
    if (newPlace.trim()) {
      onAddPlace(newPlace);
      setNewPlace("");
    }
  };

  return (
    <div>
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={newPlace}
          onChange={(e) => setNewPlace(e.target.value)}
          placeholder="国を追加"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          追加
        </button>
      </div>
      <details className="my-5 mx-auto border border-solid border-[var(--text-color)] rounded-md" open>
        <summary className="h-8 bg-[var(--main-bg-color)] cursor-pointer rounded-md mb-0">追加されている国一覧</summary>
        <ul className="p-4 flex justify-center align-baseline flex-wrap">
          {Placies.map((Place, index) => (
            <li key={index} className="p-3 bg-white border border-[var(--color-one)] m-1 min-w-[90px] flex flex-col">
              <span>{Place.name}</span>
              <button
                onClick={() => onDeletePlace(index)}
                className="text-[var(--text-color)] bg-[var(--main-bg-color)] border border-[var(--color-three)] rounded-md cursor-pointer px-3 py-2"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </details>
      <button
        onClick={onClearPlacies}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
      >
        全てクリア
      </button>
    </div>
  );
};

export default RightSide;
