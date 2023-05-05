import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Reset, RoadMap, Submit, Profile } from "./pages";
import { PrivateRoutes, PublicRoutes } from "./routes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoutes />}>
					<Route path="/" element={<RoadMap />} />
					<Route path="/login" element={<Login />} />
					<Route path="/submit" element={<Submit />} />
				</Route>
				<Route element={<PrivateRoutes />}>
					<Route path="/profile" element={<Profile />} />
					<Route path="/reset" element={<Reset />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
