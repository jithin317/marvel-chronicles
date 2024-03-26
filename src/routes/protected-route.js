import React, { useContext } from "react";
import { UserContext } from "../context/auth-context";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  console.log(user);
  return user ? children : <Navigate to={"/login"} />;
}
