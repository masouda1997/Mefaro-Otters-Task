import React from "react";

export const RoadMapHeader = () => {
	return (
		<div className="h-[50vh] w-screen overflow-hidden ">
			<div className="absolute top-[-390px] w-[690px] h-[750px] z-20 left-1/2 transform -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#6bd4da] to-primary   " />
			<div className="absolute top-[-390px] w-[700px] h-[800px] z-10 left-1/2 transform -translate-x-1/2 rounded-[50%] bg-white" />
			<div className="absolute bg-[#fb9d00] z-[0] w-[700px] h-[700px] top-[-330px]  left-1/3 transform -translate-x-1/2 rounded-[50%]  " />

			<div className="flex flex-col gap-3 absolute z-50 left-1/2 top-[30%] transform -translate-x-1/2 -translate-y-1/2">
				<p className=" text-center text-[24px] font-bold text-[#3A3A3A] ">
					نقشه راه یادگیری
					<br /> مهارت آیلتس
				</p>
				<div className="w-full h-1 bg-[#CECECE]" />
				<p className="text-center text-[24px] font-bold text-[#00109E]">
					سطح: متوسط <br />
					تیپ3 متوسط ،ج(c33)
				</p>
			</div>
		</div>
	);
};
