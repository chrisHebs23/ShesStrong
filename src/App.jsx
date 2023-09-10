import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import ScrollToTop from "./hooks/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
