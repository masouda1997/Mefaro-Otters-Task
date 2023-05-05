import React from "react";
import mefaro from "../assets/images/Mefaro.png";
import { CiUser } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const HeaderComp = () => {
	// const thePhone = useSelector((state) => state.phoneNumber.phoneNum);
	const accessKey = useSelector((state) => state.AccessCode.accessCode);
	console.log(accessKey);
	return (
		<section className="bg-white z-50 absolute top-0 w-[700px] flex px-10 py-2 mb-[3px] justify-between">
			<div className="flex items-center gap-2 flex-1">
				<RiFileList2Line className="text-[18px]" />
				<span className="text-[14px]">بلاگ</span>
			</div>

			<div className="w-[90px]">
				<img src={mefaro} alt="mefaro" />
			</div>

			<div className="flex items-center justify-end gap-3 flex-1">
				<CiUser />
				<Link to="/login" className=" text-[14px] text-black ">
					حساب کاربری
				</Link>
				<BsChevronLeft />
			</div>
		</section>
	);
};
