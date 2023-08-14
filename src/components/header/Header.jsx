import useScreenSize from "../../hooks/useScreenSize";
import BiggerHeader from "./BiggerHeader";
import SmallerHeader from "./SmallerHeader";

const Header = () => {
  const links = [
    { name: "who we are", link: "/#about", hash: true },
    { name: "challenges", link: "/challenges", hash: true },
    { name: "blog", link: "/blog", hash: true },
    { name: "faqs", link: "/faq", hash: true },
  ];
  const screenSize = useScreenSize();

  return screenSize > 1024 ? (
    <BiggerHeader links={links} />
  ) : (
    <SmallerHeader links={links} />
  );
};

export default Header;
