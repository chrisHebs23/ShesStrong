import emailjs from "@emailjs/browser";
import { useRef } from "react";
import useToastify from "../../../hooks/useToastify";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();
  const { toastError, toastSuccess } = useToastify();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toastSuccess("Email sent!");
          navigate("/", { replace: true });
        },
        (error) => {
          toastError("Error occurred please try again later");
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
                name="email"
                className="bg-primary/80 h-[35px]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              className="bg-primary/80 h-[35px]"
              required
            />
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
