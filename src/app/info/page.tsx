import InfoPageNav from "../components/layout/PageNav/InfoPageNav";
import TopSlide from "../components/layout/topSlide/TopSlide";
import DisplayInfo from "@/app/components/layout/displayInfo/DisplayInfo";

export default function Home() {
  return (
    <main>

			<div className="w-[100%] h-[calc(100vh-var(--header-height))] mt-[var(--mini-header-height)] md:mt-[var(--header-height)] max-w-full">
				<InfoPageNav />
				<TopSlide />
			</div>

      <DisplayInfo />
      
    </main>
  );
}
