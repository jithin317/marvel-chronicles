import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layouts/main-layout";
import Characters from "../modules/CharactersPage/Characters";
import Home from "../modules/HomePage/Home";
import Login from "../modules/Auth-section/login";
import SignUp from "../modules/Auth-section/signup";
import AuthContext from "../context/auth-context";
import ProtectedRoute from "./protected-route";
import Comics from "../modules/ComicsPage/comics-page";
import NoRoutePage from "../modules/NoRoutePage/NoRoutePage";
import Series from "../modules/SeriesPage/series-page";

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
              <Characters />
            </ProtectedRoute>
          ),
        },
        {
          path: "comics",
          element: (
            <ProtectedRoute>
              <Comics />
            </ProtectedRoute>
          ),
        },
        {
          path: "series",
          element: (
            <ProtectedRoute>
              <Series />
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
    {
      path: "*",
      element: (
        <ProtectedRoute>
          <NoRoutePage />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}
