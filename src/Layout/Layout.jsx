// import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="h-full flex flex-col mt-[100px] ">
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
