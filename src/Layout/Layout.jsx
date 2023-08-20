// import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Router from "../routes/Router";
import Admin from "../pages/admin/Admin";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/admin")) {
      setAdmin(true);
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      <Header />
      <main className="h-full flex flex-col mt-[100px]">
        <Router />
        {admin && <Admin />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
