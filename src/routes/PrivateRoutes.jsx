import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const targetRoute = useLocation();
  console.log(user);
  console.log(loading);
  if (loading) {
    return (
      <div className=" absolute  top-2/4 left-2/4">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#B55309"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return (
    <Navigate to={"/login"} state={{ from: targetRoute }} replace></Navigate>
  );
};

export default PrivateRoutes;
