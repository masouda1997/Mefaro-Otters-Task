import React from "react";
import { BsChat } from "react-icons/bs";
import { SlHome } from "react-icons/sl";
import { BsNewspaper } from "react-icons/bs";
import { BsSignpost2 } from "react-icons/bs";

const NavBar = () => {
	return (
		<ul className="bg-white flex gap-6 text-[14px] px-10 py-1">
			<li className="flex items-center gap-2">
				<SlHome />
				<span>خانه </span>
			</li>

			<li className="flex items-center gap-2">
				<BsNewspaper />
				<span>تمارین</span>
			</li>

			<li className="flex items-center gap-2">
				<BsSignpost2 />
				<span>مسیرهای یادگیری</span>
			</li>

			<li className="flex items-center gap-2">
				<BsChat />
				<span>تماس با ما </span>
			</li>
		</ul>
	);
};

export { NavBar };
