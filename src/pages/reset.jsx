import React from "react";
import PageContainer from "../layout/pageContainer.layout";
import Input from "../components/base/Input";

export const Reset = () => {
	return (
		<PageContainer className="bg-[#f6f6f6]  ">
			<div className="min-h-[100vh] w-[90%]  m-auto">
				<h1 className="pt-[20vh] pb-[10vh] font-bold text-2xl">
					تنظیم رمز عبور
				</h1>
				<form className="bg-white rounded-sm p-5">
					<Input placeholder={"رمز عبور"} type={"password"} />
					<Input placeholder={"تکرار رمز عبور"} type={"text"} />
				</form>
			</div>
		</PageContainer>
	);
};
