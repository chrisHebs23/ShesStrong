import { useUser, useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MakeAppointment from "./components/MakeAppointment";

const UserDashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${await getToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          !data && navigate("/onboarding", { replace: true });
        });
    };
    checkUser();
  }, []);

  return (
    <div className="screen-padding">
      Hello {user.firstName}
      <div>
        <MakeAppointment />
      </div>
    </div>
  );
};

export default UserDashboard;
