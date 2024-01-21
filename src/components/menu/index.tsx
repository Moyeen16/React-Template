import { useState } from "react";
import { IMenuItems } from "../../model/IMenuItems";
import { AngleRight } from "@styled-icons/fa-solid/AngleRight";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";
import "./style.css";
const MenuItem: React.FC<IMenuItems> = ({ label, onClick, menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleSubmenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<li
			className="relative cursor-pointer bg-menu-options-bg px-1 py"
			onMouseEnter={
				menuItems.length > 0 ? () => setIsOpen(true) : () => {}
			}
			onMouseLeave={
				menuItems.length > 0 ? () => setIsOpen(false) : () => {}
			}
		>
			<div
				className={`w-full flex items-center justify-between px-4 py-2 rounded-md ${
					menuItems.length === 0
						? "hover:bg-menu-hover"
						: isOpen
						? "bg-menu-hover"
						: "hover:bg-menu-hover"
				}`}
				onClick={menuItems.length > 0 ? () => {} : onClick}
			>
				<div>{label}</div>
				{menuItems.length > 0 && (
					<div>
						<AngleRight size={12} style={{ color: "#0f0f0f" }} />
					</div>
				)}
			</div>
			{isOpen && (
				<ul
					className={
						menuItems.length > 0
							? "submenu min-w-32 border rounded-md"
							: ""
					}
				>
					{menuItems.map((item) => (
						<MenuItem key={item.label} {...item} />
					))}
				</ul>
			)}
		</li>
	);
};

const MenuRender = (props: { items: IMenuItems[]; showMenu: boolean }) => {
	return (
		<ul
			// className={
			// 	props.showMenu
			// 		? "bg-menu-options-bg border rounded-md menu-items open"
			// 		: "menu-items"
			// }
			className="bg-menu-options-bg border rounded-md"
		>
			{props.items.map((item) => (
				<MenuItem key={item.label} {...item} />
			))}
		</ul>
	);
};

const Menu = () => {
	const [selected, setSelected] = useState<string>();
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const handleItemClick = (label: string) => {
		console.log(`Clicked on item: ${label}`);
		setSelected(label);
	};

	const menuItems: IMenuItems[] = [
		{
			label: "Home",
			onClick: () => handleItemClick("Home"),
			menuItems: [],
		},
		{
			label: "Products",
			menuItems: [
				{
					label: "Product 1",
					onClick: () => handleItemClick("Product 1"),
					menuItems: [],
				},
				{
					label: "Product 2",
					onClick: () => handleItemClick("Product 2"),
					menuItems: [],
				},
			],
		},
		{
			label: "About",
			onClick: () => handleItemClick("About"),
			menuItems: [],
		},
		{
			label: "Contact",
			onClick: () => handleItemClick("Contact"),
			menuItems: [],
		},
	];
	return (
		<div
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<div className="flex items-center justify-between border-2 rounded-md min-w-32 hover:bg-menu-hover cursor-pointer px-2 py-1">
				<div className="">{selected ? selected : "Select"}</div>
				<div>
					<AngleDown
						size={12}
						style={{
							color: "#0f0f0f",
							transform: showMenu ? "rotate(-180deg)" : "none",
							transition: "transform 150ms ease",
						}}
					/>
				</div>
			</div>

			{showMenu && <MenuRender items={menuItems} showMenu={showMenu} />}
		</div>
	);
};

export default Menu;
