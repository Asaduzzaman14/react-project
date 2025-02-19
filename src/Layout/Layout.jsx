import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Ui/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Layout;
