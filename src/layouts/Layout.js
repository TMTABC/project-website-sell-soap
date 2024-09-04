import { Outlet, Link } from "react-router-dom";
import NavbarMain from "../components/header/Navbar";
import BreadcrumbExample from "../components/breadcrumb";

const Layout = () => {
    return (
        <>
            <NavbarMain></NavbarMain>
            <BreadcrumbExample></BreadcrumbExample>
            <Outlet />
        </>
    )
};

export default Layout;