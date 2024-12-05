import DisplayDiary from "@/app/components/layout/Displaydiary/DisplayDiary";
import DisplayInfo from "@/app/components/layout/displayInfo/DisplayInfo";
import RondomSelectPlace from "@/app/components/layout/RandomSelectCountry/RandomSelectPlace";

export default function Home() {
  return (
    <main className="mt-[calc(var(--mini-header-height)+20px)] md:mt-[calc(var(--header-height)+20px)]">
      <DisplayDiary />
      <DisplayInfo />
      <RondomSelectPlace />
    </main>
  );
};
