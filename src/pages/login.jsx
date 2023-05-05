import React, { useEffect, useState } from "react";
import mefaro from "../assets/images/Mefaro.png";
import UnitButton from "../components/base/UnitButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { phoneNumberAction } from "../store";

export const Login = () => {
	const [num, setNum] = useState("");
	const [data, setData] = useState(null);
	const [flag, setFlag] = useState(false);
	const [notValid, setNotValid] = useState("");
	const [status, setStatus] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	let formData = new FormData();
	formData.append("mobile", num);

	let [requestOptions, setReq] = useState({
		method: "POST",
		redirect: "follow",
	});

	useEffect(() => {
		fetch(
			"https://4d105af1-ad0b-4759-96f8-eabf65bffd23.mock.pstmn.io/api/auth/login",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setData(result))
			.catch((error) => console.log("error", error));
	}, [flag]);

	const submitHandler = (e) => {
		console.log(num);
		let formData = new FormData();
		formData.append("mobile", num);
		e.preventDefault();

		if (num === "" || num.length < 11) {
			alert(data.message);
			setNum("");
			setNotValid("bg-rose-200");
			console.log(data);
		} else {
			setReq({
				method: "POST",
				body: formData,
				redirect: "follow",
				// headers: { "Content-type": "application/json", mobile: num },
			});
			console.log(requestOptions);
			setFlag(!flag);
			setNotValid("bg-[#F2F2F2]");
			dispatch(phoneNumberAction.passPhoneNum({ number: num }));
			console.log(data);
			// localStorage.setItem("token", data.token);
			setNum("");
			if (requestOptions.body) {
				alert(data.data.message);
				setTimeout(() => {
					navigate("/submit");
				}, 1000);
			}

			// navigate("/submit");
		}
	};

	const changeHandler = (e) => {
		setNum(e.target.value);
	};

	return (
		<div className="flex w-screen h-screen justify-center items-center bg-[#f6f6f6]">
			<div className="w-[435px] h-[435px] bg-white ">
				<header className="flex justify-center">
					<img className="scale-50" src={mefaro} />
				</header>

				<div className="mx-10">
					<h1 className=" text-[24px] font-bold mt-5">
						ورود | عضویت
					</h1>

					<form action="" onSubmit={(e) => submitHandler(e)}>
						<h3 className="mt-[57px] ">نام کاربری </h3>

						<div
							className={`${notValid} w-full bg-[#F2F2F2] p-3 flex justify-center mt-6 rounded-[8px] `}
						>
							<input
								dir="ltr"
								value={num}
								onChange={(e) => changeHandler(e)}
								type="text"
								className="w-[200px] bg-transparent text-center placeholder-gray-700 placeholder:text-[11px] outline-none "
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
