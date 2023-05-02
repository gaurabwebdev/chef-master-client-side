import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const LoginLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LoginLayout;
