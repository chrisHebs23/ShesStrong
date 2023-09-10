/* eslint-disable react/prop-types */
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import useToast from "../../../hooks/useToast";
import { useNavigate } from "react-router-dom";

const MakeAppointment = ({ user, userData, checkUser }) => {
  const navigate = useNavigate();
  const { toastSuccess } = useToast();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          toastSuccess("Appointment Successfully made! Check your email");
          checkUser();
        },
      });
    })();
  }, [checkUser, navigate, toastSuccess]);

  console.log(userData.sessions);

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
