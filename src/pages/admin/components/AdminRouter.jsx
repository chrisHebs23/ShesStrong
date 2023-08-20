import React from "react";
import { Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import BlogPosts from "./BlogPosts";
import AddPost from "./AddPost";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin/clients" element={<Clients />} />
      <Route path="/admin/blog-posts" element={<BlogPosts />} />
      <Route path="/admin/post" element={<AddPost />} />
      <Route path="/admin/post/:id" element={<AddPost />} />
    </Routes>
  );
};

export default AdminRouter;
