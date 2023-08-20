import Tracks from "./components/Tracks";

import { Route, Routes } from "react-router-dom";
import Clients from "./components/Clients";
import BlogPosts from "./components/BlogPosts";
import AddPost from "./components/AddPost";
import Dashboard from "./components/Dashboard";

const Admin = () => {
  return (
    <div className="flex w-full p-2 justify-between gap-5 overflow-hidden bg-hero-image bg-cover bg-center">
      <div className="w-[30%]">
        <Tracks />
      </div>
      <div className="w-[65%] bg-secondary/5 backdrop-blur-xl p-5">
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/blog" element={<BlogPosts />} />
          <Route path="/admin/post" element={<AddPost />} />
          <Route path="/admin/post/:id" element={<AddPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
