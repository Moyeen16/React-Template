import { IRouteConfig } from "../model/IRouteConfig";
import Pages from "../pages";
import HealthCheck from "../routes/HealthCheck";
import NotFound from "../routes/NotFound";

const routesConfig: IRouteConfig[] = [
	{
		path: "/",
		element: <Pages.Homepage />,
		children: [],
	},
	{
		path: "parent",
		element: <Pages.ParentPage />,
		children: [
			{
				path: "child1",
				element: <Pages.ChildPage1 />,
				children: [],
			},
			{
				path: "child2",
				element: <Pages.ChildPage2 />,
				children: [
					{
						path: "grand1",
						element: <Pages.GrandChildPage1 />,
						children: [],
					},
				],
			},
		],
	},
	{
		path: "healthcheck",
		element: <HealthCheck />,
		children: [],
	},
	{
		path: "*",
		element: <NotFound />,
		children: [],
	},
];

export { routesConfig };
