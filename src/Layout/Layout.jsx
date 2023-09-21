// import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Router from "../routes/Router";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const Layout = () => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    >
      <div className="relative">
        <Header />
        <main className="min-h-[800px] h-full flex flex-col mt-[100px]">
          <Router />
        </main>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default Layout;
