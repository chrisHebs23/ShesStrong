import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="my-5 w-full p-5">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col ">
          <div className="flex justify-between items-center  my-5">
            <div className="flex flex-col w-[45%] ">
              <label className="">Name: </label>
              <input
                type="text"
                name="name"
                className="bg-primary/80 h-[35px]"
                required
              />
            </div>
            <div className="flex flex-col w-[45%]">
              <label>Email:</label>
              <input
                type="email"
                name="user_email"
                className="bg-primary/80 h-[35px]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col my-5">
            <label>Message</label>
            <textarea
              name="message"
              className="bg-primary/80 h-[250px]"
              required
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="btn w-3/4 md:w-1/4  m-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
