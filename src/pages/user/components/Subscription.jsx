import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Subscription = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchPrices = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/payment/prices`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((pricesArr) => {
          setLoading(false);
          return setPrices(pricesArr.data);
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
          priceId: price.id,
        }),
      }
    )
      .then((res) => res.json())
      .then((url) => {
        window.open(url);
      });
  };

  return loading ? (
    <h2>loading</h2>
  ) : (
    <section className="screen-padding">
      {prices.map((price, i) => (
        <div key={i}>
          <h2>{price.product}</h2>
          <button onClick={() => handleSubmit(price)} type="submit">
            Select
          </button>
        </div>
      ))}
    </section>
  );
};

export default Subscription;
