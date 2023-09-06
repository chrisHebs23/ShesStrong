import { useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import BiggerHeader from "./BiggerHeader";
import SmallerHeader from "./SmallerHeader";
import { useState } from "react";

const Header = () => {
  const links = [
    { name: "who we are", link: "/#about", hash: true },
    { name: "challenges", link: "/challenges", hash: false },
    { name: "blog", link: "/blog", hash: false },
    { name: "faqs", link: "/faq", hash: false },
  ];

  const navigate = (url) => {
    window.location.href = url;
  };

  const handleAuth = async () => {
    const response = await fetch("http://localhost:4000/oauth", {
      method: "post",
    });
    const data = await response.json();
    navigate(data.url);
  };

  const screenSize = useScreenSize();
  return (
    <div className="fixed top-0 z-30 bg-primary w-full h-[100px] screen-padding">
      {screenSize > 1024 ? (
        <BiggerHeader links={links} handleAuth={handleAuth} />
      ) : (
        <SmallerHeader links={links} handleAuth={handleAuth} />
      )}
    </div>
  );
};

export default Header;
