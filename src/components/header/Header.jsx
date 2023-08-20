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
  return (
    <div className="fixed top-0 z-30 bg-primary w-full h-[100px] screen-padding">
      {screenSize > 1024 ? (
        <BiggerHeader links={links} />
      ) : (
        <SmallerHeader links={links} />
      )}
    </div>
  );
};

export default Header;
