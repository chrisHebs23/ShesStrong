import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logoImg.png";
import { useState } from "react";
import { MdOutlineSort, MdClose } from "react-icons/md";

const SmallerHeader = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-full px-1 h-[100px] flex justify-between items-center relative">
      <div>
        <Link to={"/"}>
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
        <div className={`flex-col ${!open ? " hidden " : "flex "} relative `}>
          <MdClose
            onClick={handleOpen}
            className="cursor-pointer w-12 z-10"
            size={40}
          />
          <div className="fixed flex flex-col w-screen h-screen justify-center items-center bg-primary/50 left-0 top-20 ">
            {links.map((link) => {
              return (
                <Link key={link.name + link.link} to={link.link}>
                  <p className="font-display text-3xl my-4 animate-slide-in">
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default SmallerHeader;
