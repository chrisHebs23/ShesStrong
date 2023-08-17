import PricingCards from "./reusabel/PricingCards";
import { pricing } from "../../../assets/data/pricing";

const BookingSection = () => {
  return (
    <div className="w-full h-full">
      <h2>
        <span>Prici</span>ng
      </h2>
      <div className="flex justify-center gap-3 sm:justify-between  flex-wrap ">
        {pricing.map((price, i) => (
          <PricingCards key={i} data={price} />
        ))}
      </div>
    </div>
  );
};

export default BookingSection;
