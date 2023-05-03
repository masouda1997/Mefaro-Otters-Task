import React from "react";
import PageContainer from "../layout/pageContainer.layout";
import { RoadMapHeader } from "../components";
import UnitButton from "../components/base/UnitButton";
import Article from "../components/Article";
import Sources from "../components/Sources";

export const RoadMap = () => {
	return (
		<PageContainer className="relative  overflow-y-auto">
			<RoadMapHeader />

			<div className="mx-5 mt-16 flex flex-col gap-7 bg-red-800">
				<div className="bg-white w-full p-5 ">
					<h3 className="text-[#005efb] font-bold mb-2">
						توصیه مربی
					</h3>
					<p className="text-sm">
						سلام <br />
						به سطح متوسط از مسير يادگيري آيلتس خوش اومديد
						<br /> پيشنهاد مي كنيم براي مشاهد با مطالعه محتواي
						آموزشي ، مثل يك كلاس درس ، فضاي آرامي رو پيدا كنيد و
						تمركز بالا داشته باشد. ضمنا يادداشت برداري فراموش نشه .
					</p>
				</div>

				<div className="bg-white w-full p-5 flex gap-20 items-center justify-between">
					<p className="text-sm">وضعيت اشتراك : رايگان ( فريميوم )</p>
					<UnitButton
						type="button"
						className="text-[#17CF13] text-sm font-bold border-2 w-[40%] ml-8 border-[#17CF13]"
					>
						ارتقا اشتراک
					</UnitButton>
				</div>

				<UnitButton className="border-4 border-secondary text-white p-3 self-end ">
					UNITE ONE
				</UnitButton>

				<Article />
				<p dir="ltr">
					skim a text quickly to understand the general idea{" "}
				</p>
				<Sources time={"10"} srcNum={"یک"} />
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</div>
		</PageContainer>
	);
};
