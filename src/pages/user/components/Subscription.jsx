import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PricingCards from "../../home/components/reusable/PricingCards";
import SubscriptionBtns from "../../../components/SubscriptionBtns";
import Loading from "../../../components/Loading";

const Subscription = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [training, setTraining] = useState("subscription");

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`,
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
          data?.subscribed && navigate("/user", { replace: true });
          setLoading(false);
        });
    };
    checkUser();
  }, []);

  useEffect(() => {
    setLoading(true);

    const fetchPrices = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/${training}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          return setPrices(data);
        });
    };

    fetchPrices();
  }, [training]);

  const handleSubmit = async (price) => {
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/payment/subscribe/${user.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({
          price,
        }),
      }
    )
      .then((res) => res.json())
      .then((session) => window.location.assign(session.url))
      .catch((err) => {
        console.log({ error: err.message });
      });
  };

  return (
    <section className="screen-padding">
      <h2>Select Your Subscription Type</h2>
      <p>How many sessions would you like to have?</p>
      <SubscriptionBtns training={training} setTraining={setTraining} />
      <div className="flex flex-wrap gap-2 my-7">
        {loading ? (
          <div className="h-[500px] w-full">
            <Loading />
          </div>
        ) : (
          prices.map((price, i) => (
            <PricingCards key={i} price={price} handleSubmit={handleSubmit} />
          ))
        )}
      </div>
    </section>
  );
};

export default Subscription;
