/* eslint-disable react/prop-types */

const PricingCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-rows-[100px_75px_10px_240px_80px] place-items-center bg-secondary/10 w-[75%] lg:w-[24%] md:w-[30%] sm:w-[48%] my-2 p-3 backdrop-blur-md ">
      <div className="flex flex-col justify-center items-center h-[100px] text-center">
        <h3 className="font-display text-2xl">{data.name}</h3>
        <h3 className="font-display text-2xl">
          {data.sessions > 0 ? data.sessions + " Sessions" : "-"}
        </h3>
      </div>

      <div className="flex my-2 h-[40px]">
        <p className=" self-start ">$</p>
        <h2 className="relative">{data.price}</h2>
        <p className="self-end">/mo</p>
      </div>
      <hr className="w-3/4 bg-highlight/60 border-0 h-[2px] " />
      <div className="my-2 w-full text-center flex flex-col items-center h-auto">
        {data.features.map((feature, i) => (
          <div
            key={i}
            className="w-full flex flex-col items-center justify-center"
          >
            <p className="my-1">{feature}</p>
          </div>
        ))}
      </div>

      <button className="btn bottom-0 items-end">Get Fit</button>
    </div>
  );
};

export default PricingCards;
