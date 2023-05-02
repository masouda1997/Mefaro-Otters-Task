import React from "react";
import Header from "./header.layout";

const PageContainer = (props) => {
	console.log(typeof props.className);

	return (
		<div className={props.className}>
			<Header />
			<div>{props.children}</div>
		</div>
	);
};

export default PageContainer;
