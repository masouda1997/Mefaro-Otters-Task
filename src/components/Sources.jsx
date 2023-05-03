import React from "react";
import UnitButton from "./base/UnitButton";
import books from "../assets/images/books.svg";
import pen from "../assets/images/pencil.svg";

const Sources = (props) => {
	return (
		<div className="flex gap-4 relative">
			<section className="flex w-[50px] h-[50px] ">
				<img src={books} alt="book" className="self-end " />
				<img
					src={pen}
					className="absolute w-[50px] h-[50px] right-[3%] "
					alt="pen"
				/>
			</section>
			<section className="flex flex-1 items-center justify-between px-10 gap-40 bg-white rounded-md">
				<span className="font-bold">منبع {props.srcNum}</span>
				<div className="flex flex-1 items-center gap-5 text-sm  py-5">
					<UnitButton className="text-white text-sm flex-1 px-2 bg-secondary">
						انجام شد؟
					</UnitButton>
					<UnitButton className="text-white text-sm flex-1 px-2 bg-primary">
						مشاهده
					</UnitButton>
					<span className="text-primary text-sm  px-2 bg-[#D9D9D9] py-1 rounded-md">
						{props.time}دقیقه
					</span>
				</div>
			</section>
		</div>
	);
};

export default Sources;
