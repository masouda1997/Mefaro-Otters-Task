import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
	const user = JSON.parse(localStorage.getItem("flg"));
	console.log(user);
	// const { token } = useSelector((state) => state.auth);

	return (
		<>{!user ? <Navigate to="/login" /> : <Outlet />}</>
		// token ? <Outlet /> : <Navigate to="/login" replace />;
	);
};
