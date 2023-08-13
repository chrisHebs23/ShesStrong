// import React from "react";
import workout from "../../../assets/video/workout.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-[700px] w-full mb-14">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          src={workout}
          autoPlay
          loop
          muted
          className="absolute w-[100%] object-cover h-full -z-10 "
        />
        <div className="relative md:bg-primary/0 bg-primary/60 sm:bg-gradient-to-r from-primary from-10% via-primary/60 via-50%  to-primary/0 z-0 w-full h-full"></div>
      </div>
      <div className="relative z-10 flex justify-start ml-1 lg:ml-40 md:ml-10 items-center h-full sm:px-2">
        <div className="w-full md:w-[75%] flex flex-col ">
          <h1 className="font-display text-5xl mb-3 w-full md:w-[60%] lg:w-[45%]">
            Unleash Your Inner Strength with <strong>She&apos;s Strong</strong>:
            &nbsp;
            <span className="underline decoration-highlight underline-offset-4">
              Empowering Your Fitness Jou
            </span>
            rney
          </h1>
          <p className="mt-3 w-full md:w-[70%] lg:w-[50%]">
            Embark on Your Journey Today! Schedule a Free Consultation Session
            and Embrace Your Strength with She&apos;s Strong!
          </p>
          <div className="flex items-center flex-wrap-reverse">
            <button className="btn flex items-center">Learn more</button>
            <button className="btn-2">Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
