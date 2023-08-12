import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home/Home";
import Bookings from "../pages/bookings/Bookings";
import FAQ from "../pages/faq/FAQ";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="h-screen">
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
