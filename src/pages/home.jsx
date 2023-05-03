import React from "react";
import PageContainer from "../layout/pageContainer.layout";
import { RoadMapHeader } from "../components";
import UnitButton from "../components/base/UnitButton";
import Article from "../components/Article";
import Sources from "../components/Sources";
import TextField from "../components/base/TextField";
import Ptag from "../components/base/Ptag";

export const RoadMap = () => {
	return (
		<PageContainer className="relative  overflow-y-auto">
			<RoadMapHeader />

			<div className="mx-5 my-16 flex flex-col gap-7">
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

				<Ptag dir="ltr">
					skim a text quickly to understand the general idea{" "}
				</Ptag>

				<Sources time={"6"} srcNum={"یک"} />
				<Sources time={"15"} srcNum={"دو"} />
				<UnitButton className="bg-white text-primary w-fit self-center px-5 py-3 mt-5 ">
					تمرین ها (3/0)
				</UnitButton>

				<Ptag dir="ltr">
					scan a text for specific information to answer short -
					answer questions
				</Ptag>

				<Sources time={"10"} srcNum={"یک"} />
				<Sources time={"6"} srcNum={"دو"} />
				<UnitButton className="bg-white text-primary w-fit self-center px-5 py-3 mt-5 ">
					تمرین ها (1/0)
				</UnitButton>

				<Ptag dir="ltr">
					use skimming and scanning to locate the answer quickly
				</Ptag>

				<TextField>بدون نیاز به تمرین ( فقط درسنامه )</TextField>

				<Ptag dir="ltr">understand and produce paraphrasing </Ptag>

				<Sources time={"4"} srcNum={"یک"} />
				<UnitButton className="bg-white text-primary w-fit self-center px-5 py-3 mt-5 ">
					تمرین ها (1/0)
				</UnitButton>

				<TextField>بدون نیاز به تمرین ( فقط درسنامه )</TextField>

				<Ptag dir="ltr">
					use the present continuous and present simple correctly
					correctly{" "}
				</Ptag>

				<Sources time={"12"} srcNum={"یک"} />
				<Sources time={"15"} srcNum={"دو"} />
				<UnitButton className="bg-white text-primary w-fit self-center px-5 py-3 mt-5 ">
					تمرین ها (1/0)
				</UnitButton>

				<Ptag dir="ltr">Exam skills</Ptag>

				<TextField>بدون نیاز به تمرین ( فقط درسنامه )</TextField>

				<Ptag>
					برای دسترسی به سرفصل های این درس اشتراک خود را ارتقا دهید
				</Ptag>

				<UnitButton className="border-4 border-secondary text-white p-3 self-end ">
					UNITE ONE
				</UnitButton>
				<Article />

				<Ptag dir="ltr" className="text-white">
					identify questions which ask for factual information and
					information questions which ask for the writer’s opinion
				</Ptag>

				<Ptag>
					برای دسترسی به سرفصل های این درس اشتراک خود را ارتقا دهید{" "}
				</Ptag>
			</div>
		</PageContainer>
	);
};
