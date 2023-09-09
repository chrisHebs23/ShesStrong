import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
  AuthenticateWithRedirectCallback,
} from "@clerk/clerk-react";

import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import Bookings from "../pages/bookings/Bookings";
import TermsAndConditions from "../pages/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Post from "../pages/blog/components/Post";
import { Routes, Route, useNavigate } from "react-router-dom";
import Challenges from "../pages/challenges/Challenges";
import UserDashboard from "../pages/user/UserDashboard";
import Subscription from "../pages/user/components/Subscription";
import SuccessDisplay from "../pages/user/components/SuccessDisplay";
import { useState, useEffect } from "react";

const Router = () => {
  const navigate = useNavigate();
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccess(true);
      setSessionId(query.get("session_id"));
    }
    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

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
      <Route
        path="/sign-in"
        element={
          <SignIn
            path="/sign-in"
            signUpUrl="/sign-up"
            afterSignUpUrl="/subscription"
            afterSignInUrl="/user"
          />
        }
      />
      <Route
        path="/sign-up"
        element={
          <SignUp
            path="/sign-up"
            afterSignUpUrl="/subscription"
            signInUrl="/sign-in"
          />
        }
      />
      <Route
        path="/sso-callback"
        element={<AuthenticateWithRedirectCallback redirectUrl="/onboarding" />}
      />

      <Route
        path="/user"
        element={
          <>
            <SignedIn>
              <UserDashboard />
            </SignedIn>

            <SignedOut>{navigate("/sign-in", { replace: true })}</SignedOut>
          </>
        }
      />
      <Route
        path="/subscription"
        element={
          <>
            <SignedIn>
              <Subscription />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/success"
        exact="false"
        element={
          <>
            <SignedIn>
              <SuccessDisplay sessionId={sessionId} />
            </SignedIn>
            <SignedOut>{navigate("/sign-in")}</SignedOut>
          </>
        }
      />
    </Routes>
  );
};

export default Router;
