import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import PricingCards from "../../home/components/reusable/PricingCards";

const Subscription = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchPrices = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/subscription`, {
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
  }, []);

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

  return loading ? (
    <h2>loading</h2>
  ) : (
    <section className="screen-padding">
      <h2>Select Your Subscription Type</h2>
      <p>How many sessions would you like to have?</p>
      <div className="flex flex-wrap gap-2 my-7">
        {prices.map((price, i) => (
          <PricingCards key={i} price={price} handleSubmit={handleSubmit} />
        ))}
      </div>
    </section>
  );
};

export default Subscription;
