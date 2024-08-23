import { Outlet, Link } from "react-router-dom";
import NavbarMain from "../components/header/Navbar";

const Layout = () => {
    return (
        <>
            <NavbarMain></NavbarMain>
            <Outlet />
        </>
    )
};

export default Layout;