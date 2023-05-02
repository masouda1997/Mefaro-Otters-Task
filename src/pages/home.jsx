import React from "react";
import PageContainer from "../layout/pageContainer.layout";
import { RoadMapHeader } from "../components";
import UnitButton from "../components/base/UnitButton";

export const RoadMap = () => {
	return (
		<PageContainer className="relative overflow-x-hidden overflow-y-auto">
			<RoadMapHeader />

			<div className="mx-5 mt-16 flex flex-col gap-7 overflow-auto">
				<div className="bg-white w-full p-5 ">
					<h3 className="text-[#005efb] font-bold mb-2">
						توصیه مربی{" "}
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
				<span className="text-white self-end text-sm">
					THE MAN - MADE ENVIRONMENT📌
				</span>
				<article>jgugi</article>
			</div>
		</PageContainer>
	);
};
