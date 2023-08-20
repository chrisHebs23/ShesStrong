import React from "react";

const FAQ = () => {
  return (
    <div className="screen-padding">
      <h2 className="mb-5">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-5">
        <div className="">
          <h3>Q: What is She&apos;s Strong all about?</h3>
          <p>
            A: She&apos;s Strong is your ultimate fitness partner, dedicated to
            empowering women on their wellness journey. We offer personalized
            training, expert guidance, and a supportive community to help you
            achieve your fitness goals.
          </p>
        </div>
        <div className="faq-item">
          <h3>Q: How do I join a fitness challenge?</h3>
          <p>
            A: Joining a fitness challenge is easy! Visit our Challenges page,
            select the challenge you&apos;re interested in, and follow the
            registration steps. Get ready to sweat, share your progress, and win
            fantastic rewards!
          </p>
        </div>
        <div className="faq-item">
          <h3>Q: Can I cancel my membership?</h3>
          <p>
            A: Of course! You can cancel your membership at any time by visiting
            your Account settings. Keep in mind that some membership plans may
            have specific terms, so review them before making changes.
          </p>
        </div>
        <div className="faq-item">
          <h3>Q: What&apos;s included in my training plan?</h3>
          <p>
            A: Your training plan includes personalized workouts tailored to
            your fitness level and goals, nutritional guidance, access to live
            classes, and ongoing support from our dedicated trainers. It&apos;s
            a comprehensive package designed for your success!
          </p>
        </div>
        <div className="faq-item">
          <h3>Q: How can I contact customer support?</h3>
          <p>
            A: If you have any questions or need assistance, our friendly
            customer support team is here to help! You can reach us via email at{" "}
            <a href="mailto:support@shesstrong.com">support@shesstrong.com</a>{" "}
            or through our Contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
