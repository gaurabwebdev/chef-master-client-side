import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const targetRoute = useLocation();
  console.log(targetRoute);
  if (loading) {
    return (
      <button type="button" className="bg-indigo-500 ... mx-auto" disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
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
