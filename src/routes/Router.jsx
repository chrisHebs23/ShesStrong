// import React from "react";
import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import Bookings from "../pages/bookings/Bookings";
import TermsAndConditions from "../pages/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Post from "../pages/blog/components/Post";

import { Routes, Route } from "react-router-dom";
import Challenges from "../pages/challenges/Challenges";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/challenges" element={<Challenges />} />
    </Routes>
  );
};

export default Router;
