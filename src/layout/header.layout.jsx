import React from "react";
import { HeaderComp, NavBar } from "../components";

const Header = () => {
	return (
		<div className="bg-[#cdcdcd] absolute z-50 h-[50px] w-[700px]">
			<HeaderComp />
			<NavBar />
		</div>
	);
};
export default Header;
