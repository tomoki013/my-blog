import SiteRule from "../components/layout/site-rule/SiteRule";

export default function Home() {
  return (
    <main className="mt-[calc(var(--mini-header-height)+20px)] md:mt-[calc(var(--header-height)+20px)] pb-[5px]">
      <SiteRule />
    </main>
  );
};
