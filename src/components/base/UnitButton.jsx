import React from "react";

const UnitButton = (props) => {
	return (
		<button
			type={props.type}
			className={`p-1 rounded-md ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default UnitButton;
