import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  return (
    // <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    // </React.StrictMode>
  );
}

export default App;
