import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../components/layouts/main-layout";
import Home from "../modules/HomePage/Home";
import AuthContext from "../context/auth-context";
import ProtectedRoute from "./protected-route";
import LoadingBackground from "../components/loaders/lazy-loaders";
const Login = lazy(() => import("../modules/Auth-section/login"));
const SignUp = lazy(() => import("../modules/Auth-section/signup"));
const Comics = lazy(() => import("../modules/ComicsPage/comics-page"));
const Series = lazy(() => import("../modules/SeriesPage/series-page"));
const Characters = lazy(() => import("../modules/CharactersPage/Characters"));
const NoRoutePage = lazy(() => import("../modules/NoRoutePage/NoRoutePage"));

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
    <Suspense fallback={<LoadingBackground />}>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </Suspense>
  );
}
