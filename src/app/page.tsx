import DisplayDiary from "./components/layout/Displaydiary/DisplayDiary";
import DisplayInfo from "./components/layout/displayInfo/DisplayInfo";

export default function Home() {
  
  return (
    <main className="mt-[calc(var(--mini-header-height)+20px)] md:mt-[calc(var(--header-height)+20px)]">
      <DisplayDiary />
      <DisplayInfo />
    </main>
  );
}
