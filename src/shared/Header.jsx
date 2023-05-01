import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* TOP bar starts */}
      <div className="w-full bg-amber-700 py-4 px-8 text-gray-200 flex justify-between items-center">
        <div className="flex gap-3">
          <PhoneIcon className="h-6 w-6 " />
          <p>
            Call: <span>+91 8884 5556</span>
          </p>
        </div>
        <div>
          <Link className="pe-3  border-e-2" to={"/register"}>
            Register
          </Link>
          <Link className="ps-3" to={"/login"}>
            Sign In
          </Link>
        </div>
      </div>
      {/* Top Bar Ends */}

      {/* Header Starts */}
      <div className="w-full bg-stone-300 py-4 px-8 text-gray-700 flex justify-between items-center">
        <div>
          <Link className="flex items-center">
            <img
              className="w-16"
              src="https://img.icons8.com/plasticine/100/null/uber-eats.png"
              alt=""
            />
            <p className="text-xl">
              <span className="text-3xl">c</span>hef_
              <span className="text-3xl">m</span>aster
            </p>
          </Link>
        </div>

        <ul className="flex items-center gap-4 text-xl">
          <li className="ml-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="ml-4">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className="ml-4">
            <Link>Home</Link>
          </li>
        </ul>
      </div>
      {/* Header Ends */}
    </div>
  );
};

export default Header;
