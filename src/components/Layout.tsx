import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children?: ReactNode;
  setSearchQuery: (query: string) => void;
  favoritesFilter: boolean;
  setFavoritesFilter: (filter: boolean) => void;
};

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
