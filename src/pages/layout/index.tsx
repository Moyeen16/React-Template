import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavbar } from "ms-custom-react-components-library";
import { routesConfig } from "../../configs/routes";
import { IRouteConfig } from "../../model/IRouteConfig";

const Layout = () => {
  const renderRoutes = (routes: IRouteConfig[]) => {
    return routes.map((route: IRouteConfig, index: number) => (
      <Route key={index} {...route}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };
  return (
    <div className="bg-body h-screen">
      <BrowserRouter>
        <TopNavbar applicationName="Application Name" />
        <Routes>{renderRoutes(routesConfig)}</Routes>
      </BrowserRouter>
    </div>
  );
};
export default Layout;
