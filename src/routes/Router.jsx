// import React from "react";
import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import Bookings from "../pages/bookings/Bookings";
import TermsAndConditions from "../pages/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";

import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
};

export default Router;
