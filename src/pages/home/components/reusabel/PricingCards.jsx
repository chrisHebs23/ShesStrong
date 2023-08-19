/* eslint-disable react/prop-types */

const PricingCards = ({ data }) => {
  return (
    <div className="card md:grid-rows-[100px_75px_10px_240px_80px]">
      <div className="flex flex-col justify-center items-center h-[100px] text-center">
        <h3>{data.name}</h3>
        <h3>{data.sessions > 0 ? data.sessions + " Sessions" : "-"}</h3>
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
