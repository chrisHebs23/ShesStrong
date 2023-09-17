import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router-dom";
import useToastify from "../../../hooks/useToastify";

const AddPost = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { getToken } = useAuth();
  const editorRef = useRef(null);
  const { toastError, toastSuccess } = useToastify();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    bannerImage: "",
    text: "",
  });

  const fetchData = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
      });
  };

  useEffect(() => {
    const blogData = JSON.parse(localStorage.getItem("blogData"));
    if (id && !blogData) {
      fetchData(id);
    }
    if (blogData) {
      setBlogData(blogData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(editorRef.current.getContent());
    setBlogData((prevBlogData) => ({
      ...prevBlogData,
      [name]: value,
    }));

    localStorage.setItem("blogData", JSON.stringify(blogData));
  };

  const handleTextChange = (content) => {
    console.log(content);
    setBlogData((prevBlogData) => ({
      ...prevBlogData,
      ["text"]: content,
    }));

    localStorage.setItem("blogData", JSON.stringify(blogData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let slug = blogData.title.toLowerCase().replace(" ", "-");
    let authorImage = user.imageUrl;

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog${id && `/${id}`}`, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({
        title: blogData.title,
        slug,
        authorImage,
        bannerImage: blogData.bannerImage,
        text: blogData.text,
        updatedAt: id && Date.now(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toastSuccess(
          !data.title
            ? `${blogData.title} Successfully updated `
            : `${data.title} Successfully added`
        );
        localStorage.removeItem("blogData");
        setTimeout(() => {
          setLoading(true);
          navigate("/admin/blog-posts", { replace: true });
        }, 5000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toastError("Error Occurred please try again later");
      });
  };

  if (loading) {
    return <div>Loading </div>;
  }

  return (
    <div className=" bg-secondary/20 w-full p-5">
      <form id="blog-form" className="w-full" onSubmit={handleSubmit}>
        <div className="form-div">
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <label>Image Banner</label>
          <input
            type="bannerImage"
            id="bannerImage"
            name="bannerImage"
            value={blogData.bannerImage}
            onChange={handleChange}
          />
        </div>
        <p>Banner image preview</p>
        <div className="banner w-full h-[400px] border-secondary border overflow-hidden object-cover">
          {blogData.bannerImage.includes("https://") ? (
            <img
              src={blogData.bannerImage}
              className="object-cover w-full h-[500px]"
            />
          ) : (
            <p>Please put a valid image url to see preview</p>
          )}
        </div>

        <div>
          <Editor
            id="text"
            name="text"
            onEditorChange={handleTextChange}
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={blogData.text}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | image | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <button onClick={handleSubmit} className="btn">
          Upload Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
