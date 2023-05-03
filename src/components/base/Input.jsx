import React from "react";
import { BsEye } from "react-icons/bs";

const Input = (props) => {
	return (
		<>
			<div className=" flex items-center ">
				<input
					className="outline-none w-[100%] placeholder:text-[#747474] placeholder:font-semibold placeholder:text-sm"
					type={props.type}
					placeholder={props.placeholder}
				/>
				<BsEye size={20} color="#747474" />
			</div>
			<div className="w-full h-[1px] bg-[#eaeaea] my-2 rounded-[20%] " />
		</>
	);
};

export default Input;
