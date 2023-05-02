import React from "react";
import "../index.css";
import mefaro from "../assets/images/Mefaro.png";

export const Login = () => {
	return (
		<div className="w-[435px] h-[435px] bg-white mt-[10vh]">
			<header className="flex justify-center">
				<img className="scale-50" src={mefaro} />
			</header>

			<div className="mx-10">
				<h1 className=" text-[24px] font-bold mt-5">ورود | عضویت</h1>

				<form action="" className="">
					<h3 className="mt-[57px] ">نام کاربری </h3>

					<div className="w-full bg-[#F2F2F2] p-3 flex justify-center mt-6 rounded-[8px] ">
						<input
							type="text"
							className="w-[200px] bg-transparent placeholder-gray-700 placeholder:text-[11px] outline-none "
							placeholder="لطفا شماره موبایل یا ایمیل خود را وارد کنید "
						/>
					</div>

					<p className="text-[12px] flex justify-start mt-3 font-bold ">
						ورود شما به معنای پذیرش
						<a href="#"> شرایط میفارو &nbsp;</a>
						و&nbsp;
						<a href="#"> قوانین و حریم خصوصی </a>است
					</p>

					<div className="w-full flex justify-center">
						<button className="bg-primary w-[285px] rounded-[8px] py-1 text-white text-sm mt-9">
							تایید
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
