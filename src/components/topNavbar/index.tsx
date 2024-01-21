import { Link } from "react-router-dom";
import { ITopNavbarProps } from "../../model/ITopNavbarProps";

const TopNavbar = (props: ITopNavbarProps) => {
	return (
		<div className="bg-navbar-bg text-navbar px-4 py-2">
			<div className="flex items-center sm:w-5/12 lg:w-6/12 xl:w-7/12">
				<img
					className="zsLogo"
					src="/logos/ZSLogoSmall.png"
					alt="ZS Logo"
					style={{
						height: "3rem",
						objectFit: "cover",
					}}
				/>
				<h1 className="text-navbar-text ml-4 text-xl font-bold leading-snug tracking-normal ">
					<Link to="/" className="hover:text-navbar-text-hover">
						{props.applicationName}
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default TopNavbar;
