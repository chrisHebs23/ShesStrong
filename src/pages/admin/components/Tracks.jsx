import {
  MdOutlinePeopleOutline,
  MdArticle,
  MdAddChart,
  MdNoteAdd,
} from "react-icons/md";
import { LiaTrophySolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Tracks = () => {
  return (
    <div className="bg-secondary/10 h-full backdrop-blur-lg flex ">
      <nav className="p-5 flex md:flex-col">
        <Link to="/admin" className="admin-link">
          <MdAddChart size={35} /> &nbsp; <p>Dashboard</p>
        </Link>
        <Link to="/admin/clients" className="admin-link">
          <MdOutlinePeopleOutline size={35} /> &nbsp; <p>Clients</p>
        </Link>
        <Link to="/admin/blog" className="admin-link">
          <MdArticle size={35} /> &nbsp; <p>Blog Posts</p>
        </Link>
        <Link to="/admin/posts" className="admin-link">
          <MdNoteAdd size={35} /> &nbsp; <p>Add Blog Posts</p>
        </Link>
        <Link to="/admin/challenges" className="admin-link">
          <LiaTrophySolid size={35} /> &nbsp; <p>Challenges</p>
        </Link>
        <img src={logo} className="hidden lg:block" />
      </nav>
    </div>
  );
};

export default Tracks;
