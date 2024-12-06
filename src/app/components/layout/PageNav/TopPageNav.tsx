import Link from "next/link";

export default function TopPageNav() {
    return (
        <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-5 bg-opacity z-[calc(var(--header-z-index)-1)] max-w-[80%]">
            <h2 className="mb-4 underline">トップページ</h2>
            <ul className="p-0 flex justify-center align-center flex-col md:flex-row">
                <li className="mx-5 my-2"><Link href="#domestic" className="text-black hover:opacity-70">国内旅行</Link></li>
                <li className="mx-5 my-2"><Link href="#oversea" className="text-black hover:opacity-70">海外旅行</Link></li>
                <li className="mx-5 my-2"><Link href="#info" className="text-black hover:opacity-70">観光情報</Link></li>
                <li className="mx-5 my-2"><Link href="#roulette" className="text-black hover:opacity-70">旅行先ルーレット</Link></li>
                <li className="mx-5 my-2"><Link href="#profile" className="text-black hover:opacity-70">プロフィール</Link></li>
            </ul>
        </nav>
    )
}