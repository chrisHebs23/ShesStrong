import { MdArticle, MdAddChart, MdNoteAdd } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { LiaTrophySolid } from "react-icons/lia";

import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
const Tracks = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }
  return (
    <div className="bg-secondary/10  backdrop-blur-lg flex flex-col justify-center items-center ">
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden my-2">
            <img src={user.imageUrl} className="w-[150px]" />
          </div>
          <h3>{user.firstName}</h3>
        </div>
      </div>
      <nav className="p-5 flex flex-wrap justify-center gap-x-5 items-center">
        <Link to="" className="admin-div">
          <MdAddChart size={35} /> &nbsp; <p>Dashboard</p>
        </Link>
        <Link to="blog-posts" className="admin-div">
          <MdNoteAdd size={35} /> &nbsp; <p>Blog Posts</p>
        </Link>
        <Link to="new-post" className="admin-div">
          <MdArticle size={35} /> &nbsp; <p>Add Blog Post</p>
        </Link>
        <Link to="challenges" className="admin-div">
          <LiaTrophySolid size={35} /> &nbsp; <p>Challenges</p>
        </Link>
        <Link to="add-challenges" className="admin-div">
          <TbHeartPlus size={35} /> &nbsp; <p>Add Challenge</p>
        </Link>
      </nav>
    </div>
  );
};

export default Tracks;
