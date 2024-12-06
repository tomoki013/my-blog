import styles from "@/app/components/layout/profile/Profile.module.css";
import Image from "next/image";

export default function Profile() {
    return (
        <section className="bg-white text-center p-4 mt-4 md:m-4 md:rounded-xl" id="profile">
            <Image
                src="/images/diary/Introduce/introduce.jpg"
                alt="プロフィール写真"
                width={100}
                height={100}
                className={styles.profile_img}
            />
            <h3>プロフィール</h3><hr />
            <p>兵庫県神戸市出身、京都府京都市在住の大学生</p>
            <p>大学に入ってから旅行にハマりこれまでに全国、そして世界を旅する</p>
            <p>現在、HTML,CSS,JavaScriptを勉強中でアウトプットのためにブログを始める</p>
        </section>
    );
};