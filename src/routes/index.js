import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layouts/main-layout";
import Characters from "../modules/CharactersPage/Characters";
import Home from "../modules/HomePage/Home";
import Login from "../modules/Auth-section/login";
import SignUp from "../modules/Auth-section/signup";
import AuthContext from "../context/auth-context";
import ProtectedRoute from "./protected-route";

export default function Index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "characters",
          element: (
            <ProtectedRoute>
              {" "}
              <Characters />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}
