// types.ts
export interface FrontMatter {
    title: string;
    date: string;
    place?: string; // 必須でない場合は "?" を付与
    // その他のフィールドも必要に応じて追加
}
