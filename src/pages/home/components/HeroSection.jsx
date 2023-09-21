import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const { user } = useUser();
  return (
    <section className="relative h-[700px] w-full mb-14 mt-0">
      {/* Video background */}
      <div className="absolute w-full h-full overflow-">
        <video
          src="https://res.cloudinary.com/dxkhfuabn/video/upload/v1695152399/workout_wow8gr.mp4"
          autoPlay
          loop
          muted
          className="absolute w-[100%] object-cover h-full -z-10 "
        />
        <div className="relative md:bg-primary/0 bg-primary/70 md:bg-gradient-to-r from-primary from-10% via-primary/60 via-50%  to-primary/0 z-0 w-full h-full"></div>
      </div>
      <div className="relative z-10 flex justify-start screen-padding items-center h-full ">
        {/* Hero text */}
        <div className="w-full md:w-[80%] flex flex-col ">
          <h1 className="font-display text-5xl mb-3 w-full md:[75%] lg:w-[55%] ">
            Unleash Your Inner Strength with{" "}
            <strong>
              <nobr>She&apos;s Strong:</nobr>{" "}
            </strong>
            <span className="gradient-underline">
              <nobr>Empowering Your </nobr>
            </span>
            <span className="gradient-underline-2">Fitness</span>
          </h1>
          <p className="mt-3 w-full md:w-[70%] lg:w-[50%]">
            Embark on Your Fitness Journey Today! Schedule a Consultation
            Session and Embrace Your Strength with She&apos;s Strong!
          </p>
          {/* Call to action buttons */}
          <div className="flex items-center flex-wrap-reverse ">
            <HashLink to="/#about">
              <button className="btn flex items-center mr-5">Learn more</button>
            </HashLink>
            <Link to={user ? "user/appointment" : "sign-up"}>
              <button className="btn-2">Book Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
