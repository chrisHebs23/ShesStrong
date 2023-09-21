import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useToastify from "../../../hooks/useToastify";
import useDate from "../../../hooks/useDate";
import PopUp from "./PopUp";

const ChallengesPage = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(false);
  const { returnDate } = useDate();
  const { toastError, toastSuccess } = useToastify();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const fetchChallenges = async () => {
    setLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/challenge`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/challenge/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((status) => {
        if (status === 204) {
          toastSuccess("Successfully delete post");
          setOpen(false);
          setDeleteId("");
          fetchChallenges();
        }
      })
      .catch((err) => {
        toastError("Error occurred ");
      });
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>Challenges</h2>
      <div className="w-full flex flex-col gap-y-5 ">
        {challenges.length > 0 ? (
          challenges.map((post, i) => (
            <div
              key={i}
              className="bg-secondary/20 flex flex-col md:flex-row gap-5 items-center"
            >
              <div className="md:w-1/4">
                <img src={post.bannerImage} />
              </div>
              <h3 className="md:w-1/4">{post.title}</h3>
              <h3 className="md:w-1/4">
                Posted on: {returnDate(post.startDate)}
              </h3>
              <div className="w-full md:w-1/4 flex justify-evenly mb-3">
                <Link
                  to={`/admin/edit-challenges/${post._id}`}
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
          <h3>No Blog challenges yet</h3>
        )}
      </div>
      {open && <PopUp setOpen={setOpen} method={handleDelete} id={deleteId} />}
    </div>
  );
};

export default ChallengesPage;
