import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navber";
import Footer from "../Component/Shared/Footer";

const MainLayout = () => {
    return (
       <>
       <Navber/>
       <Outlet/>
       <Footer/>
       </>
    );
};

export default MainLayout;