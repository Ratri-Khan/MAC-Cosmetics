import React from "react";
import Header from "../Component/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register") || location.pathname.includes("/details");
  return (
    <div>
      {" "}
      <Header></Header>
      <Outlet></Outlet>
      {noFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
