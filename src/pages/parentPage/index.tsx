import { Outlet } from "react-router-dom";

const ParentPage = () => {
	return (
		<div>
			Parent Page
			<Outlet />
		</div>
	);
};

export default ParentPage;
