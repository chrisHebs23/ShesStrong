import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SuccessDisplay = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [subsData, setSubsData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/payment/subscription-status/${
          user.id
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err.error));
    };

    getSubscriptionStatus();
    console.log(subsData);
  }, []);

  return (
    <section className="screen-padding flex justify-center h-[500px]">
      <div className="product Box-root">
        <div className="description Box-root flex flex-col justify-center">
          <h3>Subscription to starter plan successful!</h3>
          <button onClick={() => navigate("/user", { replace: true })}>
            Go to Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessDisplay;
