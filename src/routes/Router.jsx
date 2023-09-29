import { lazy, Suspense } from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/home/Home"));
const FAQ = lazy(() => import("../pages/faq/FAQ"));
const Bookings = lazy(() => import("../pages/bookings/Bookings"));
const TermsAndConditions = lazy(() =>
  import("../pages/termsAndConditions/TermsAndConditions")
);
const PrivacyPolicy = lazy(() =>
  import("../pages/privacyPolicy/PrivacyPolicy")
);
const Contact = lazy(() => import("../pages/contact/Contact"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const Post = lazy(() => import("../pages/blog/components/Post"));
const Challenges = lazy(() => import("../pages/challenges/Challenges"));
const UserDashboard = lazy(() => import("../pages/user/UserDashboard"));
const Subscription = lazy(() =>
  import("../pages/user/components/Subscription")
);
const SuccessDisplay = lazy(() =>
  import("../pages/user/components/SuccessDisplay")
);
const Admin = lazy(() => import("../pages/admin/Admin"));
const Dashboard = lazy(() => import("../pages/admin/components/Dashboard"));
const BlogPosts = lazy(() => import("../pages/admin/components/BlogPosts"));
const AddPost = lazy(() => import("../pages/admin/components/AddPost"));
const ChallengesPage = lazy(() =>
  import("../pages/admin/components/ChallengesPage")
);
const AddChallenge = lazy(() =>
  import("../pages/admin/components/AddChallenge")
);
const DashboardUser = lazy(() =>
  import("../pages/user/dashboardComponents/Dashboard")
);
const MakeAppointment = lazy(() =>
  import("../pages/user/dashboardComponents/MakeAppointment")
);

const UserReview = lazy(() =>
  import("../pages/user/dashboardComponents/UserReview")
);
const AddReview = lazy(() =>
  import("../pages/user/dashboardComponents/AddReview")
);

import Loading from "../components/Loading";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/faq"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <FAQ />
          </Suspense>
        }
      />
      <Route
        path="/bookings"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <Bookings />
          </Suspense>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <TermsAndConditions />
          </Suspense>
        }
      />
      <Route
        path="/privacy"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <PrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="/blog/:slug"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <Post />
          </Suspense>
        }
      />
      <Route
        path="/challenges"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <Challenges />
          </Suspense>
        }
      />
      <Route
        path="/sign-in"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <div className="flex justify-center items-center my-5">
              <SignIn
                path="/sign-in"
                signUpUrl="/sign-up"
                afterSignUpUrl="/subscription"
                appearance={{
                  rootBox: {
                    fontFamily: "Poppins, sans-serif",
                  },
                  elements: {
                    formButtonPrimary: {
                      backgroundColor: "#48FD4A",
                      color: "#111111",
                      textSiz: 16,
                    },
                  },
                }}
              />
            </div>
          </Suspense>
        }
      />
      <Route
        path="/sign-up"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <div className="flex justify-center items-center my-5">
              <SignUp
                path="/sign-up"
                afterSignUpUrl="/subscription"
                signInUrl="/sign-in"
                appearance={{
                  rootBox: {
                    fontFamily: "Poppins, sans-serif",
                  },
                  elements: {
                    formButtonPrimary: {
                      backgroundColor: "#48FD4A",
                      color: "#111111",
                      textSiz: 16,
                    },
                  },
                }}
              />
            </div>
          </Suspense>
        }
      />

      <Route
        path="/user"
        exact="true"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <SignedIn>
              <UserDashboard />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </Suspense>
        }
      >
        <Route
          path=""
          exact
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <DashboardUser />
            </Suspense>
          }
        />

        <Route
          path="appointment"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <MakeAppointment />
            </Suspense>
          }
        />

        <Route
          path="review"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <UserReview />
            </Suspense>
          }
        />
        <Route
          path="add-review"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <AddReview />
            </Suspense>
          }
        />
        <Route
          path="edit-review/:id"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <AddReview />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/subscription"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <SignedIn>
              <Subscription />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </Suspense>
        }
      />
      <Route
        path="/success"
        exact="false"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <SignedIn>
              <SuccessDisplay />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn redirectUrl="/sign-in" />
            </SignedOut>
          </Suspense>
        }
      />

      <Route
        path="/admin"
        exact="true"
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen">
                <Loading />
              </div>
            }
          >
            <SignedIn>
              <Admin />
            </SignedIn>
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="blog-posts"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <BlogPosts />
            </Suspense>
          }
        />
        <Route
          path="new-post"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <AddPost />
            </Suspense>
          }
        />
        <Route
          path="edit-post/:id"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <AddPost />
            </Suspense>
          }
        />
        <Route
          path="challenges"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <ChallengesPage />
            </Suspense>
          }
        />
        <Route
          path="add-challenges"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <AddChallenge />
            </Suspense>
          }
        />
        <Route
          path="edit-challenges/:id"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen">
                  <Loading />
                </div>
              }
            >
              <AddChallenge />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
