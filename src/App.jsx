import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import ScrollToTop from "./hooks/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
        <ToastContainer />
        {/* <CookieConsent
          buttonStyle={{ background: "#48FD4A" }}
          buttonClasses="btn"
        >
          <p>This website uses cookies to enhance the user experience.</p>
        </CookieConsent> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
