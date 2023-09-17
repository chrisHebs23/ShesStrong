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
import { Routes, Route } from "react-router-dom";
import Challenges from "../pages/challenges/Challenges";
import UserDashboard from "../pages/user/UserDashboard";
import Subscription from "../pages/user/components/Subscription";
import SuccessDisplay from "../pages/user/components/SuccessDisplay";
import Admin from "../pages/admin/Admin";
import Dashboard from "../pages/admin/components/Dashboard";
import BlogPosts from "../pages/admin/components/BlogPosts";
import AddPost from "../pages/admin/components/AddPost";
import ChallengesPage from "../pages/admin/components/ChallengesPage";
import AddChallenge from "../pages/admin/components/AddChallenge";
import DashboardUser from "../pages/user/dashboardComponents/Dashboard";
import MakeAppointment from "../pages/user/dashboardComponents/MakeAppointment";
import UserSubscription from "../pages/user/dashboardComponents/UserSubscription";
import UserReview from "../pages/user/dashboardComponents/UserReview";
import AddReview from "../pages/user/dashboardComponents/AddReview";

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
            afterSignUpUrl="/subscription"
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
        exact="true"
        element={
          <>
            <SignedIn>
              <UserDashboard />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </>
        }
      >
        <Route path="" element={<DashboardUser />} />
        <Route path="subscription" element={<UserSubscription />} />
        <Route path="appointment" element={<MakeAppointment />} />
        <Route path="subscription" element={<UserSubscription />} />
        <Route path="review" element={<UserReview />} />
        <Route path="add-review" element={<AddReview />} />
        <Route path="edit-review/:id" element={<AddReview />} />
      </Route>
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
              <SuccessDisplay />
            </SignedIn>
            <SignedOut></SignedOut>
          </>
        }
      />

      <Route
        path="/admin"
        exact="true"
        element={
          <SignedIn>
            <Admin />
          </SignedIn>
        }
      >
        <Route path="" element={<Dashboard />} />
        <Route path="blog-posts" element={<BlogPosts />} />
        <Route path="new-post" element={<AddPost />} />
        <Route path="edit-post/:id" element={<AddPost />} />
        <Route path="challenges" element={<ChallengesPage />} />
        <Route path="add-challenges" element={<AddChallenge />} />
        <Route path="edit-challenges/:id" element={<AddChallenge />} />
      </Route>
    </Routes>
  );
};

export default Router;
