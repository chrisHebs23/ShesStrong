import PricingCards from "./reusable/PricingCards";
import useGet from "../../../hooks/useGet";
import Loading from "../../../components/Loading";

const BookingSection = () => {
  const { data, loading, isError } = useGet(
    `${import.meta.env.VITE_BACKEND_URL}/subscription`
  );

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

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
        <div className="flex justify-center gap-3 sm:justify-between  flex-wrap ">
          {data.map((price, i) => (
            <PricingCards key={i} price={price} />
          ))}
        </div>
      </section>
    );
  }
};

export default BookingSection;
