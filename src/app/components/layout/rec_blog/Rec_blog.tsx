import styles from "./Rec_blog.module.css";
import Link from "next/link";

const Rec_blog: React.FC = () => {
    return (
        <aside>

            {/* 最新のブログ*/}
            <div>
                <h2>最新のブログ</h2>
                <ul>
                    {/* 最新のブログをここに表示*/}
                </ul>
            </div>

            {/* おすすめのブログ*/}
            <div>
                <h2>おすすめのブログ</h2>
                <ul>
                    {/* おすすめのブログをここに表示*/}
                </ul>
            </div>

        </aside>
    )
}

export default Rec_blog;