/* eslint-disable react/prop-types */
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const UserSubscription = ({ userData }) => {
  const { getToken } = useAuth();
  const [subscriptionType, setSubscriptionType] = useState({});
  const [loading, setLoading] = useState(false);
  const subscriptions = userData.subscriptions[0];

  useEffect(() => {
    setLoading(true);

    const fetchPrices = async () => {
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/subscription/${
          subscriptions.plan.id
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          return setSubscriptionType(data);
        });
    };

    fetchPrices();
  }, []);

  const returnDate = (dateItem) => {
    const date = new Date(dateItem * 1000);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="flex flex-col justify-center items-center my-11">
      <h2>{subscriptionType.name} Plan</h2>
      <h3>Sessions a month: {subscriptionType.sessions}</h3>
      <h3>Next billing date: {returnDate(subscriptions.current_period_end)}</h3>
      <button
        onClick={() =>
          (window.location.href =
            import.meta.env.VITE_STRIPE_CUSTOMER_PORTAL_URL)
        }
        className="btn"
      >
        Manage Billing
      </button>
    </div>
  );
};

export default UserSubscription;
