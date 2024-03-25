import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layouts/main-layout";
import Characters from "../modules/CharactersPage/Characters";
import Home from "../modules/HomePage/Home";
import Login from "../modules/Auth-section/login";

export default function Index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "characters",
          element: <Characters />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}
