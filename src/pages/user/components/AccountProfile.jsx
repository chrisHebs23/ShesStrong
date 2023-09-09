/* eslint-disable react/prop-types */
import { UserProfile, useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const AccountProfile = ({ user, btnTitle, redirectUrl }) => {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/profile/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getToken()}`,
          },
          body: JSON.stringify({
            userId: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          }),
        }
      );

      if (!response.ok) {
        return { message: "Could not create new user please try again later" };
      }
      return navigate(redirectUrl, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Account Profile</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full"
      >
        <UserProfile appearance={{ baseTheme: "dark" }} />
        <button type="submit" className="btn">
          {btnTitle}
        </button>
      </form>
    </div>
  );
};

export default AccountProfile;
