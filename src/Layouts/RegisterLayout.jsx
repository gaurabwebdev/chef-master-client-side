import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const RegisterLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-232px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RegisterLayout;
