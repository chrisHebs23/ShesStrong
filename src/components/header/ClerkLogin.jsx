/* eslint-disable react/prop-types */
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const ClerkLogin = ({ handleOpen }) => {
  const { user } = useUser();

  return (
    <>
      <SignedOut>
        <Link to="/sign-in">
          <button className="btn">Sign In</button>
        </Link>
      </SignedOut>
      <SignedIn>
        {user?.publicMetadata.admin ? (
          <Link to="/admin">
            <p className="font-display text-3xl my-4 animate-slide-in">Admin</p>
          </Link>
        ) : (
          <Link to="/user" onClick={handleOpen}>
            <p className="font-display text-3xl my-4 animate-slide-in">
              Profile
            </p>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
};

export default ClerkLogin;
