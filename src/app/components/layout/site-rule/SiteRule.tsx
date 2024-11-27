import styles from "@/app/components/layout/site-rule/SiteRule.module.css";

export default function SiteRule() {
    return (
        <div className={styles.wrapper}>

            {/* プライバシーポリシー */}
            <div className={styles.privacy_policy}>
                <h2>プライバシーポリシー</h2><hr />
                <h3>ともきちの旅行ブログ プライバシーポリシー</h3>
                <p>ともきちの旅行ブログ（以下「当サイト」）では、以下の方針に基づき個人情報を取り扱います。</p>
                <h3>1.個人情報の収集について</h3>
                <p>当サイトでは、お問い合わせ時にメールアドレスを提供いただきます。これらの情報は、ユーザーからのお問い合わせに対応するのみに使用し、他の目的には利用しません。</p>
                <h3>2.広告の配信について</h3>
                <p>当サイトでは、Google Adsenceを使用しています。</p>
                <p>・第三者（Googleなど）がCookieを利用して広告を配信し、ユーザーの興味に応じた広告を表示する場合があります。</p>
                <p>・Cookieの利用を無効にする方法については、ブラウザの設定をご確認ください。</p>
                <h3>3.アクセス解析について</h3>
                <p>当サイトでは、Google Analyticsを使用しています。匿名でトラフィックデータを収集し、サイト運営の参考にしています。</p>
                <h3>4.メールでのお問い合わせについて</h3>
                <p>メールアドレスを公開しており、連絡先は以下の通りです：</p>
                <p>・お問い合わせ先：</p>
                <p>tomoki_ttttt[at]icloud.com</p>
                <p>（[at]を@に置き換えてください）</p>
                <p>提供されたメールアドレスは、お問い合わせ対応のみに使用されます。</p>
                <h3>5.免責事項</h3>
                <p>当サイトで提供する情報やリンク先に関する内容について、一切の責任を負いません。</p>
            </div>

            <hr />

            {/* 利用規約 */}
            <div className={styles.terms_of_service}>
            <h2>利用規約</h2><hr />
                <h3>ともきちの旅行ブログ 利用規約</h3>
                <h3>第1条（適用）</h3>
                <p>本規約は、当サイトの利用条件を定めたものです。利用者は本規約に同意したうえでご利用ください。</p>
                <h3>第2条（禁止事項）</h3>
                <p>利用者は以下の行為を禁止します：</p>
                <p>・当サイトのコンテンツの無断転載や二次利用。</p>
                <p>・他社を誹謗中傷する行為。</p>
                <p>・サイトの運営を妨害する行為。</p>
                <h3>第3条（免責事項）</h3>
                <p>当サイトで提供する情報の正確性について最善を尽くしますが、完全性を保証するものではありません。また、外部リンク先の内容について責任を負いません。</p>
                <h3>第4条（著作権）</h3>
                <p>当サイト内の全ての文章・画像の著作権は運営者に帰属します。無断転載を禁止します。</p>
                <h3>第5条（変更）</h3>
                <p>本規約は、必要に応じて変更することがあります。変更後は、サイトに掲載された時点で効力を発生します。</p>
            </div>
            
        </div>
    )
}