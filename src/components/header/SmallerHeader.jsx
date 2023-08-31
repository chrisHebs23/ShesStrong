/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logoImg.png";
import { useState } from "react";
import { MdOutlineSort, MdClose } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import ClerkLogin from "./ClerkLogin";

const SmallerHeader = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-full px-1 h-[100px] flex justify-between items-center  z-50">
      <div className=" z-30">
        <Link to={"/"} onClick={open ? handleOpen : null}>
          <img src={logoImg} alt="She's Strong" className="h-[60px]" />
        </Link>
      </div>

      {!open ? (
        <MdOutlineSort
          onClick={handleOpen}
          className="cursor-pointer scale-x-[-1]"
          size={40}
        />
      ) : (
        <div className={`flex-col ${!open ? " hidden " : "flex "}`}>
          <MdClose
            onClick={handleOpen}
            className="cursor-pointer w-12 z-10"
            size={40}
          />
          <div className="fixed flex flex-col w-screen h-screen justify-center items-center bg-primary/70 left-0 top-0  ">
            {links.map((link) =>
              link.hash ? (
                <HashLink
                  key={link.name + link.link}
                  smooth
                  to={link.link}
                  onClick={handleOpen}
                >
                  <p className="font-display text-3xl my-4 animate-slide-in">
                    {link.name}
                  </p>
                </HashLink>
              ) : (
                <Link
                  key={link.name + link.link}
                  to={link.link}
                  onClick={handleOpen}
                >
                  <p className="font-display text-3xl my-4 animate-slide-in">
                    {link.name}
                  </p>
                </Link>
              )
            )}
            <ClerkLogin handleOpen={handleOpen} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default SmallerHeader;
