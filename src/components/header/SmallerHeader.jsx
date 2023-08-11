import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logoImg.png";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const SmallerHeader = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-full h-[100px] md:py-[25px] md:px-[100px] flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <img src={logoImg} alt="She's Strong" className="h-[60px]" />
        </Link>
      </div>

      {open ? (
        <Bars4Icon onClick={handleOpen} className="cursor-pointer w-12" />
      ) : (
        <div className={`w-[40%] flex-col ${!open ? "hidden" : "flex"} `}>
          <XMarkIcon onClick={handleOpen} className="cursor-pointer absolute" />
          {links.map((link) => {
            return (
              <Link key={link.name + link.link} to={link.link}>
                <p className="font-display text-3xl">{link.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default SmallerHeader;
