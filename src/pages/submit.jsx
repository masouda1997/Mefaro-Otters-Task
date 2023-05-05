import React, { useEffect, useState } from "react";
import mefaro from "../assets/images/Mefaro.png";
import UnitButton from "../components/base/UnitButton";
import { useSelector } from "react-redux";
import decode from "jwt-decode";

export const Submit = () => {
	const thePhone = useSelector((state) => state.phoneNumber.phoneNum);
	const [data, setData] = useState(null);
	let formdata = new FormData();
	formdata.append("mobile", thePhone);

	let requestOptions = {
		method: "POST",
		redirect: "follow",
	};

	useEffect(() => {
		fetch(
			"https://4d105af1-ad0b-4759-96f8-eabf65bffd23.mock.pstmn.io/api/auth/login/confirm",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				if (result.token) {
					localStorage.setItem("token", result.token);
				}

				return setData(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	// console.log(data);
	// localStorage.setItem("token", data.token);
	// const x = decode(data.token);
	// console.log(x);
	let starNumber = 0;
	typeof thePhone !== "undefined" && thePhone.length === 0
		? console.log("empty")
		: (starNumber = thePhone.number.replace(/.(?=.{4,}$)/g, "*"));

	// Replace("09131071365",Substr("09131071365",4,6),"******")
	return (
		<div className="flex w-screen h-screen justify-center items-center bg-[#f6f6f6]">
			<div className="w-[435px] h-[435px] bg-white ">
				<header className="flex justify-center">
					<img className="scale-50" src={mefaro} />
				</header>

				<div className="mx-10">
					<h1 className=" text-[24px] font-bold mt-5">
						کد تایید را وارد کنید
					</h1>

					<form>
						<h3 className="mt-[57px] ">
							کد تایید برای شماره
							<span dir="ltr">
								{starNumber === 0 ? " ________ " : starNumber}
							</span>
							پیامک شد .
						</h3>

						<div
							className={` w-full bg-[#F2F2F2] p-3 flex justify-center mt-6 rounded-[8px] `}
						>
							<input
								dir="ltr"
								type="text"
								className="w-[200px] text-center bg-transparent placeholder-gray-700 outline-none "
							/>
						</div>

						<a className="text-[12px]" href="#">
							ویرایش شماره تلفن
						</a>

						<div className="w-full flex justify-center">
							<UnitButton
								type="submit"
								className="bg-primary w-[285px] rounded-[8px] py-1 text-white text-sm mt-9"
							>
								تایید
							</UnitButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
