import TopPageNav from "./components/layout/PageNav/TopPageNav";
import TopSlide from "./components/layout/topSlide/TopSlide";
import DisplayDiary from "./components/layout/Displaydiary/DisplayDiary";
import DisplayInfo from "./components/layout/displayInfo/DisplayInfo";
import RandomSelectPlace from "@/app/components/layout/RandomSelectPlace/RandomSelectPlace";
import Profile from "./components/layout/profile/Profile";

export default function Home() {

return (
		<main>

			<div className="w-[100%] h-[calc(100vh-var(--header-height))] mt-[var(--mini-header-height)] md:mt-[var(--header-height)] max-w-full">
				<TopPageNav />
				<TopSlide />
			</div>

			<div className="grid grid-cols-1">
				<DisplayDiary />
			</div>
			<DisplayInfo />
			<RandomSelectPlace />
			<Profile />

		</main>
	);
}
