import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../layout/pageContainer.layout";
import UnitButton from "../components/base/UnitButton";

const Profile = () => {
	const navigate = useNavigate();

	const handelExit = () => {
		localStorage.removeItem("token");
		navigate("/");
	};
	return (
		<PageContainer className=" h-screen bg-primary">
			<div className="absolute mt-[50px] bg-white">
				<Link
					to="/reset"
					className="z-[100] font-bole text-[50px] text-primary underline"
				>
					تغییر رمز ورود
				</Link>
				<button
					onClick={handelExit}
					className=" block font-bold text-[50px] text-primary "
				>
					خروج
				</button>
			</div>
		</PageContainer>
	);
};

export { Profile };
