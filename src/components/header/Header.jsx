import useScreenSize from "../../hooks/useScreenSize";
import BiggerHeader from "./BiggerHeader";
import SmallerHeader from "./SmallerHeader";

const Header = () => {
  const links = [
    { name: "who we are", link: "/about" },
    { name: "challenges", link: "/challenges" },
    { name: "blog", link: "/blog" },
    { name: "faqs", link: "/faq" },
  ];
  const screenSize = useScreenSize();

  return screenSize > 1024 ? (
    <BiggerHeader links={links} />
  ) : (
    <SmallerHeader links={links} />
  );
};

export default Header;
