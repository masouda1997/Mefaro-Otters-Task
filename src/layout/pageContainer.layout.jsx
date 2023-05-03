import React from "react";
import Header from "./header.layout";

const PageContainer = (props) => {
	console.log(typeof props.className);

	return (
		<div className={`${props.className} w-[700px] bg-primary`}>
			<Header />
			<div>{props.children}</div>
		</div>
	);
};

export default PageContainer;
