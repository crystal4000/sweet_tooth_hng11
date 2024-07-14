import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "../types/types";

const Layout = ({
  children,
  setSearchQuery,
  favoritesFilter,
  setFavoritesFilter,
}: LayoutProps) => {
  return (
    <>
      <Navigation
        setSearchQuery={setSearchQuery}
        setFavoritesFilter={setFavoritesFilter}
        favoritesFilter={favoritesFilter}
      />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
