import React from "react";
import mefaro from "../assets/images/Mefaro.png";
import { CiUser } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { BsChevronLeft } from "react-icons/bs";

export const HeaderComp = () => {
	return (
		<section className="bg-white z-50 w-[100vw] flex px-10 py-2 mb-[3px] justify-between">
			<div className="flex items-center gap-2">
				<RiFileList2Line className="text-[18px]" />
				<span className="text-[14px]">بلاگ</span>
			</div>

			<div className="w-[90px] ">
				<img src={mefaro} alt="mefaro" />
			</div>

			<div className="flex items-center gap-3">
				<CiUser />
				<span className=" text-[14px] ">حساب کار بری </span>
				<BsChevronLeft />
			</div>
		</section>
	);
};
