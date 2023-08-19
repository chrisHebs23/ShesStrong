import PricingCards from "./reusabel/PricingCards";
import { pricing } from "../../../assets/data/pricing";

const BookingSection = () => {
  return (
    <section className="w-full h-full">
      <h2>
        <span>Pricing</span>
      </h2>
      <div className="flex justify-center gap-3 sm:justify-between  flex-wrap ">
        {pricing.map((price, i) => (
          <PricingCards key={i} data={price} />
        ))}
      </div>
    </section>
  );
};

export default BookingSection;
