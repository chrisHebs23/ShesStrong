/* eslint-disable react/prop-types */
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import useToastify from "../../../hooks/useToastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useState } from "react";

const MakeAppointment = () => {
  const navigate = useNavigate();
  const { toastSuccess } = useToastify();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        setUserData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    (async function () {
      let count = 0;
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          if (count === 0) {
            toastSuccess("Appointment Successfully made! Check your email");
            navigate("/user", { replace: true });
            count++;
          }
        },
      });
    })();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="h-full w-full flex-col my-10 justify-center items-center">
      {userData.sessions > 0 ? (
        <Cal
          calLink={import.meta.env.VITE_CAL_LINK}
          config={{
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            userId: user.id,
            theme: "dark",
          }}
        />
      ) : (
        <div>
          <h2>Out of Sessions</h2>
          <p>Want more? Upgrade Subscriptions</p>
          <button
            onClick={() =>
              (window.location.href =
                import.meta.env.VITE_STRIPE_CUSTOMER_PORTAL_URL)
            }
            className="btn"
          >
            Upgrade Sessions
          </button>
        </div>
      )}
    </div>
  );
};

export default MakeAppointment;
