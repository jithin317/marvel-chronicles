import React from "react";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
