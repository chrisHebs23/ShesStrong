import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useDate from "../../../hooks/useDate";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import useToastify from "../../../hooks/useToastify";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { returnDate } = useDate();
  const { toastError, toastSuccess } = useToastify();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const fetchBlog = async () => {
    setLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((status) => {
        if (status === 204) {
          toastSuccess("Successfully delete post");
          setOpen(false);
          setDeleteId("");
          fetchBlog();
        }
      })
      .catch((err) => {
        toastError("Error occurred ");
      });
  };

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      <Link>
        <button className="btn">Add Post</button>
      </Link>
      <div className="w-full flex flex-col gap-y-5 ">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <div
              key={i}
              className="bg-secondary/20 flex flex-col md:flex-row gap-5 items-center"
            >
              <div className="md:w-1/4">
                <img src={post.bannerImage} />
              </div>
              <h3 className="md:w-1/4">{post.title}</h3>
              <h3 className="md:w-1/4">
                Posted on: {returnDate(post.createdAt)}
              </h3>
              <div className="w-full md:w-1/4 flex justify-evenly mb-3">
                <Link
                  to={`/admin/edit-post/${post._id}`}
                  className="hover:text-orange-400"
                >
                  <h3>Edit</h3>
                </Link>
                <button
                  onClick={() => {
                    setOpen(true);
                    setDeleteId(post._id);
                  }}
                  className="hover:text-red-600"
                >
                  <h3>Delete</h3>
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3>No Blog Posts yet</h3>
        )}
      </div>

      {open && <PopUp setOpen={setOpen} method={handleDelete} id={deleteId} />}
    </div>
  );
};

export default BlogPosts;
