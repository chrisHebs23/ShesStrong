import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
