import DisplayInfo from "@/app/components/layout/displayInfo/DisplayInfo";

export default function Home() {
  return (
    <main className="mt-[calc(var(--mini-header-height)+20px)] md:mt-[calc(var(--header-height)+20px)]">
      <DisplayInfo />
    </main>
  );
}
