import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MakeAppointment from "./components/MakeAppointment";

const UserDashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          !data.onboarded && navigate("/onboarding", { replace: true });
        });
    };
    checkUser();
  }, []);

  return (
    <div className="screen-padding">
      Hello {user.firstName}
      <div>
        <MakeAppointment user={user} />
      </div>
    </div>
  );
};

export default UserDashboard;
