import PricingCards from "./reusable/PricingCards";
import useGet from "../../../hooks/useGet";
import Loading from "../../../components/Loading";
import { useState } from "react";
import SubscriptionBtns from "../../../components/SubscriptionBtns";

const BookingSection = () => {
  const [training, setTraining] = useState("subscription");
  const { data, loading, isError } = useGet(
    `${import.meta.env.VITE_BACKEND_URL}/${training}`
  );

  if (isError) {
    return (
      <div className="h-[500px]">
        <h2>Something went wrong!</h2>
      </div>
    );
  }

  if (data) {
    return (
      <section className="w-full h-full">
        <h2>
          <span className="underline-effect">Pricing</span>
        </h2>
        <SubscriptionBtns setTraining={setTraining} training={training} />
        {loading ? (
          <div className="h-[500px]">
            <Loading />
          </div>
        ) : (
          <div className="flex justify-center gap-3 sm:justify-between  flex-wrap ">
            {data.map((price, i) => (
              <PricingCards key={i} price={price} />
            ))}
          </div>
        )}
      </section>
    );
  }
};

export default BookingSection;
