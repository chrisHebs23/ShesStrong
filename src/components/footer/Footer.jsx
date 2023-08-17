import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const termLinks = [
    { name: "Contact Us", link: "/contact" },
    { name: "Terms and Conditions", link: "/terms-and-conditions" },
    { name: "Privacy", link: "/privacy" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      src: <BsFacebook size={40} />,
      link: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      src: <BsInstagram size={40} />,
      link: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      src: <BsTwitter size={40} />,
      link: "https://www.twitter.com",
    },
  ];

  return (
    <footer className="flex justify-center items-center my-16 mx-3 md:h-[300px] ">
      <div className="md:w-2/4">
        <div className="flex md:flex-row flex-col justify-between mb-8">
          <div className="mb-6 ">
            <h4 className="header md:text-3xl text-2xl">Terms</h4>
            <hr className="w-10" />
            {termLinks.map((term) => (
              <Link key={term.name + termLinks.link} to={term.link}>
                <p>{term.name}</p>
              </Link>
            ))}
          </div>
          <div className="mb-6 ">
            <h4 className="header md:text-3xl text-2xl ">Follow Us</h4>
            <hr className="w-16" />
            <div className="flex flex-row  mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name + social.link}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-8"
                >
                  {social.src}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-bod text-center">
            Copyright &copy; {new Date().getFullYear()}
            <strong> SHE&apos;S STRONG</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
