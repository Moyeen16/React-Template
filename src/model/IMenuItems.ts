export interface IMenuItems {
	label: string;
	menuItems: IMenuItems[];
	onClick?: () => void;
}
