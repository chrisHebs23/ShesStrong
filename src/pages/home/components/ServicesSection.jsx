import React from "react";
import { services } from "../../../assets/data/services";

const ServicesSection = () => {
  return (
    <section>
      <h2>
        <span className="underline-effect">What We Do</span>
      </h2>
      <div className="flex justify-center gap-3 sm:justify-between flex-wrap ">
        {services.map((service, i) => (
          <div key={i} className="card ">
            <div id="cut" className="w-[100px] h-[100px] mb-3">
              {service.img}
            </div>

            <h3 className="my-3 text-center flex self-start">
              {service.service}
            </h3>
            <p className="my-3 text-center ">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
