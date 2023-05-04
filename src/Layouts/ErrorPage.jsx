import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src="https://img.icons8.com/external-filled-line-gradient-andi-nur-abdillah/64/null/external-Sad-survey-(filled-line)-filled-line-gradient-andi-nur-abdillah.png" />
      <h2 className="text-9xl font-semibold text-amber-600 mt-3">404</h2>

      <p className="my-8">
        Seems Like You Are Trying To Access Unavailable{" "}
        <span className="text-2xl font-semibold text-amber-600 block text-center my-5">
          URL
        </span>
      </p>
      <Link to={"/"}>
        <button className="btn bg-amber-700 border-0">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
