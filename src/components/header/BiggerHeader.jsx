/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import logoName from "../../assets/images/logoName.png";
import { Link } from "react-router-dom";
import ClerkLogin from "./ClerkLogin";

const BiggerHeader = ({ links, handleAuth }) => {
  return (
    <nav className="w-full h-[100px] md:py-[25px] flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <img src={logoName} alt="She's Strong" className="h-[53px] -ml-3" />
        </Link>
      </div>
      <div className="flex lg:w-[45%] md:w-[40%] justify-between items-center">
        {links.map((link) =>
          link.hash ? (
            <HashLink key={link.name + link.link} smooth to={link.link}>
              <p className="font-display text-3xl ">{link.name}</p>
            </HashLink>
          ) : (
            <Link key={link.name + link.link} to={link.link}>
              <p className="font-display text-3xl">{link.name}</p>
            </Link>
          )
        )}

        <ClerkLogin />
      </div>
    </nav>
  );
};

export default BiggerHeader;
