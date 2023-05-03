import React from "react";

const Ptag = (props) => {
	return (
		<p dir={props.dir} className={`${props.className} text-white `}>
			{props.children}
		</p>
	);
};

export default Ptag;
