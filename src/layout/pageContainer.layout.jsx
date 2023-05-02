import React from "react";
import { Header } from "./header.layout";

export const PageContainer = (props) => {
	return (
		<>
			<Header />
			<div>{props.children}</div>
		</>
	);
};
