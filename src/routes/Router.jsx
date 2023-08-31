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
import { Routes, Route, redirect } from "react-router-dom";
import Challenges from "../pages/challenges/Challenges";
import UserDashboard from "../pages/user/UserDashboard";
import Onboarding from "../pages/user/components/Onboarding";
import Subscription from "../pages/user/components/Subscription";
import SuccessDisplay from "../pages/user/components/SuccessDisplay";

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
      <Route
        path="/sign-in"
        element={
          <SignIn
            path="/sign-in"
            signUpUrl="/sign-up"
            afterSignUpUrl="/onboarding"
          />
        }
      />
      <Route
        path="/sign-up"
        element={
          <SignUp
            path="/sign-up"
            afterSignUpUrl="/onboarding"
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
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/onboarding"
        element={
          <>
            <SignedIn>
              <Onboarding />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
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
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/success"
        element={
          <>
            <SignedIn>
              <SuccessDisplay />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
};

export default Router;
