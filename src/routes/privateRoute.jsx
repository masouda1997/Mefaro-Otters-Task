import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
	const user = JSON.parse(localStorage.getItem("token"));
	// const user = true;
	console.log(user);

	// const { token } = useSelector((state) => state.auth);

	return (
		<>
			{!user ? <Navigate to="/login" /> : <Outlet />}
			{/* {!user ? <Navigate to="/profile" /> : <Outlet />} */}
		</>
		// token ? <Outlet /> : <Navigate to="/login" replace />;
	);
};
