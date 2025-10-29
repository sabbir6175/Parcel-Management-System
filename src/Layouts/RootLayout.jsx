import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer.jsx/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
