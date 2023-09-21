import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../../admin/components/PopUp";
import useToastify from "../../../hooks/useToastify";
import Loading from "../../../components/Loading";

const UserReview = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const { toastError, toastSuccess } = useToastify();

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((status) => {
        if (status === 204) {
          toastSuccess("Successfully delete post");
          setOpen(false);
          setDeleteId("");
          getReview();
        }
      })
      .catch((err) => {
        toastError("Error occurred ");
      });
  };

  const getReview = async () => {
    setLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/review/user/${user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        setReview(data);
      })
      .catch((err) => {
        toastError(err.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    getReview();
  }, []);

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

  if (Object.keys(review).length === 0)
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <h3>No Review added yet</h3>
        <Link to="/user/add-review">
          <button className="btn">Add a review</button>
        </Link>
      </div>
    );

  return (
    <div className="overflow-hidden">
      <h2>Review</h2>
      <div className="my-5 flex flex-col md:flex-row bg-secondary/10 p-5 justify-evenly items-center w-full">
        <img src={review.imageUrl} className="w-[150px] rounded-full" />
        <div>
          <h3>Rating</h3>
          <h3> {review.rating}/5</h3>
        </div>
        <div>
          <h3>Review</h3>
          <p>
            {review.text.split("").length < 7
              ? review.text
              : review.text.split(" ").splice(0).join(" ") + "..."}
          </p>
        </div>
        <div className="flex gap-5">
          <Link
            className="hover:text-orange-400"
            to={`/user/edit-review/${review._id}`}
          >
            <h3>Edit</h3>
          </Link>
          <button
            className="hover:text-red-600"
            onClick={() => {
              setOpen(true);
              setDeleteId(review._id);
            }}
          >
            <h3>Delete</h3>
          </button>
        </div>
      </div>
      {open && <PopUp setOpen={setOpen} method={handleDelete} id={deleteId} />}
    </div>
  );
};

export default UserReview;
