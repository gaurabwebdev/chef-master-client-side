import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Main from "../Layouts/Main";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginLayout from "../Layouts/LoginLayout";
import RegisterLayout from "../Layouts/RegisterLayout";
import ChefDetails from "../components/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Layouts/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,

    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterLayout></RegisterLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
