const AboutSection = () => {
  return (
    <section className="w-full my-8">
      <h2 id="about">
        <span className="underline-effect">who we are</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full items-center my-7">
        <div className="w-full md:w-[60%] lg:w-[70%] h-full">
          <p>
            At SHE&apos;S STRONG, we are dedicated to helping women aged 30 and
            older embark on a transformative fitness journey beyond physical
            exercise. We understand women&apos;s unique needs and goals in this
            stage of life, and our personalized training programs are designed
            to empower you to thrive mentally and physically.
            <br />
            <br />
            Our holistic approach to fitness focuses on building strength,
            enhancing flexibility, boosting energy levels, and promoting overall
            well-being. Whether you&apos;re looking to regain your vitality,
            manage stress, or embrace a healthier lifestyle; our tailored
            workouts and supportive community will guide you every step of the
            way.
            <br />
            <br />
            Join us today and embark on a fulfilling journey towards a
            healthier, happier, and more empowered you. Your strength has no
            limits, and come to join us and find out that SHE&apos;S STRONG.
          </p>
        </div>
        <div className="w-full xlg:w-[35%] lg:w-[35%] md:w-[45%] flex justify-center ">
          <img
            src="https://res.cloudinary.com/dxkhfuabn/image/upload/v1695152646/logo_xtllya.png"
            alt="She's Strong Logo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
