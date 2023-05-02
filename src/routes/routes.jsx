import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Main from "../Layouts/Main";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginLayout from "../Layouts/LoginLayout";
import RegisterLayout from "../Layouts/RegisterLayout";
import ChefDetails from "../components/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs/:id",
        element: <ChefDetails />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
