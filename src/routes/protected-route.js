import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    if (!user) {
      localStorage.setItem("redirectUrl", location.pathname);
    }
  }, [user, location.pathname]);

  return user ? children : <Navigate to={"/login"} replace />;
}
