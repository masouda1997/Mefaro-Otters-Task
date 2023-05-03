import React from "react";
import PageContainer from "../layout/pageContainer.layout";
import Input from "../components/base/Input";
import UnitButton from "../components/base/UnitButton";

export const Reset = () => {
	return (
		<PageContainer className="bg-[#f6f6f6] relative ">
			<form className="min-h-[100vh] w-[90%] m-auto">
				<h1 className="pt-[20vh] pb-[10vh] font-bold text-2xl">
					تنظیم رمز عبور
				</h1>
				<div className="bg-white rounded-sm p-5">
					<Input placeholder={"رمز عبور"} type={"password"} />
					<Input placeholder={"تکرار رمز عبور"} type={"text"} />
				</div>
				<UnitButton className="bg-primary text-white absolute bottom-6 w-[40%] transform left-1/2 -translate-x-1/2">
					تایید
				</UnitButton>
			</form>
		</PageContainer>
	);
};
