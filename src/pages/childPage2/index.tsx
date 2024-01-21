import { Outlet } from "react-router-dom";

const ChildPage2 = () => {
	return (
		<div>
			Child Page 2
			<Outlet />
		</div>
	);
};

export default ChildPage2;
