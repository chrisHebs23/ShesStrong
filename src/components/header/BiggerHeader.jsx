import { HashLink } from "react-router-hash-link";
import logoName from "../../assets/images/logoName.png";
import { Link } from "react-router-dom";

const BiggerHeader = ({ links }) => {
  return (
    <nav className="w-full h-[100px] md:py-[25px] md:px-[100px] flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <img src={logoName} alt="She's Strong" className="h-[53px]" />
        </Link>
      </div>
      <div className="flex w-[40%] justify-between ">
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
      </div>
    </nav>
  );
};

export default BiggerHeader;