/* eslint-disable react/prop-types */
import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

const UserSubscription = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState({});
  const { getToken } = useAuth();
  const [subscriptionType, setSubscriptionType] = useState({});
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const fetchPrices = async (data) => {
    setSubscriptionLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/subscription/${data}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSubscriptionType(data);
        setSubscriptionLoading(false);
      });
  };

  const getUser = async () => {
    setUserLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
        setUserLoading(false);
        fetchPrices(data.subscriptions.plan.id);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const returnDate = (dateItem) => {
    const date = new Date(dateItem * 1000);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  if (userLoading || subscriptionLoading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center my-11">
        <h2>{subscriptionType.name} Plan</h2>
        <h3>Sessions a month:&nbsp;{subscriptionType.sessions}</h3>
        <h3>
          Next billing date:&nbsp;
          {returnDate(userData.subscriptions?.current_period_end || "")}
        </h3>
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
  }
};

export default UserSubscription;
