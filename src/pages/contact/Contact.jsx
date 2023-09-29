import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div className="screen-padding bg-hero-image w-full bg-cover bg-center my-10">
      <h2 className="mb-5">
        <span className="underline-effect">Contact Us</span>
      </h2>
      <p className="mb-5">
        Hello, curious minds and future fit-fam members! Got questions?
        We&apos;ve got answers! Whether you&apos;re wondering about our training
        programs, class schedules, or the secret behind our trainer&apos;s
        incredible energy, we&apos;re here to spill the beans. Drop us a line,
        and we&apos;ll have a chat that&apos;s as smooth as your post-workout
        protein shake. No question is too big or too small U+2013 we&apos;re all
        about sharing fitness knowledge and having a blast while we&apos;re at
        it. So hit us up and let&apos;s your fitness journey starts with a
        simple &apos;Hello!&apos;
      </p>
      <div className="bg-secondary/10 backdrop-blur-md w-full md:w-3/4 m-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
