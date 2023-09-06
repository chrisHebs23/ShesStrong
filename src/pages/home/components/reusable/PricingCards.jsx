/* eslint-disable react/prop-types */

const PricingCards = ({ price, handleSubmit }) => {
  return (
    <div className="card md:grid-rows-[100px_75px_10px_240px_80px]">
      <div className="flex flex-col justify-center items-center h-[100px] text-center">
        <h3>{price.name}</h3>
        <h3>{price.sessions > 0 ? price.sessions + " Sessions" : "-"}</h3>
      </div>

      <div className="flex my-2 h-[40px]">
        <p className=" self-start ">$</p>
        <h2 className="relative">{price.price}</h2>
        <p className="self-end">/mo</p>
      </div>
      <hr className="w-3/4 bg-highlight/60 border-0 h-[2px] " />
      {price.features && (
        <div className="my-2 w-full text-center flex flex-col items-center h-auto">
          {price.features.map((feature, i) => (
            <div
              key={i}
              className="w-full flex flex-col items-center justify-center"
            >
              <p className="my-1">{feature}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => handleSubmit(price)}
        className="btn bottom-0 items-end"
      >
        Get Fit
      </button>
    </div>
  );
};

export default PricingCards;
