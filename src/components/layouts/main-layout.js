import React from "react";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <>
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
}
