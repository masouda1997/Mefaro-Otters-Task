import React, { useEffect, useState } from "react";
import mefaro from "../assets/images/Mefaro.png";
import UnitButton from "../components/base/UnitButton";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";
import { accessCodeAction } from "../store";

export const Submit = () => {
	const thePhone = useSelector((state) => state.phoneNumber.phoneNum);
	const [code, setCode] = useState("");
	const [data, setData] = useState(null);
	const [flag, setFlag] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let starNumber = 0;

	let [requestOptions, setReq] = useState({
		method: "POST",
		redirect: "follow",
	});

	useEffect(() => {
		fetch(
			"https://4d105af1-ad0b-4759-96f8-eabf65bffd23.mock.pstmn.io/api/auth/login/confirm",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				if (result.token) {
				}
				return setData(result);
			})
			.catch((error) => console.log("error", error));
	}, [flag]);

	// ****************************************************************

	const submitHandler = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("mobile", code);
		if (code === "") {
			console.log(data);
			alert(data.errors.code);
		} else {
			setReq({
				method: "POST",
				body: formData,
				redirect: "follow",
				// headers: { "Content-type": "application/json", mobile: num },
			});

			localStorage.setItem("token", JSON.stringify(data.token));
			// dispatch(phoneNumberAction.passPhoneNum({ number: num }));
			if (data.token) {
				dispatch(
					accessCodeAction.passAccessNum({ accessKey: data.message })
				);
				navigate("/");
			}
		}
		setFlag(!flag);
		// const fromData
	};

	const changeHandler = (e) => {
		setCode(e.target.value);
	};
	// console.log(data);
	// localStorage.setItem("token", data.token);
	// const x = decode(data.token);
	// console.log(x);
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

					<form onSubmit={(e) => submitHandler(e)}>
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
								onChange={(e) => changeHandler(e)}
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
