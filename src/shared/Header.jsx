import React, { useContext } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
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
        <div className="flex items-center">
          {user ? (
            user.photoURL ? (
              <img
                loading="lazy"
                className="w-8 rounded-full"
                src={user.photoURL}
                alt="user-pic"
              />
            ) : (
              <img
                loading="lazy"
                className="w-8 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt="user-pic"
              />
            )
          ) : (
            <Link className="pe-3  border-e-2" to={"/register"}>
              Register
            </Link>
          )}
          {user ? (
            <Link onClick={handleLogout} className="ps-3" to={"/"}>
              Sign Out
            </Link>
          ) : (
            <Link className="ps-3" to={"/login"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      {/* Top Bar Ends */}

      {/* Header Starts */}
      <div className="w-full bg-stone-300 py-4 px-8 text-gray-700 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <div>
          <Link to={"/"} className="flex items-center">
            <img
              className="w-16"
              src="https://img.icons8.com/color-glass/100/null/salt-bae.png"
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
            <NavLink
              className={({ isActive }) => (isActive ? "text-amber-600" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="ml-4">
            <NavLink
              className={({ isActive }) => (isActive ? "text-amber-600" : "")}
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Header Ends */}
    </div>
  );
};

export default Header;
