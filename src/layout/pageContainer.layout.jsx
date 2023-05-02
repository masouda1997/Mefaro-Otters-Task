import React from "react";
import Header from "./header.layout";

const PageContainer = (props) => {
	return (
		<>
			<Header />
			<div>{props.children}</div>
		</>
	);
};

export default PageContainer;
