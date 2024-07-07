import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children?: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
