import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import UploadWidget from "../../../components/UploadWidget";
import { useAuth, useUser } from "@clerk/clerk-react";
import useToastify from "../../../hooks/useToastify";
import { useNavigate, useParams } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const [rating, setRating] = useState({
    imageUrl: user.imageUrl,
    rating: 0,
    text: "",
  });
  const { toastError, toastSuccess } = useToastify();

  const fetchData = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/review/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setRating(data);
        localStorage.setItem("rating", JSON.stringify(rating));
      });
  };

  useEffect(() => {
    const rating = JSON.parse(localStorage.getItem("blogData"));
    if (id && !rating) {
      fetchData(id);
    }
    if (rating) {
      setRating(rating);
    }
  }, []);

  const handleRatingChange = (newRating) => {
    setRating((prevRating) => ({ ...prevRating, ["rating"]: newRating }));
    localStorage.setItem("rating", JSON.stringify(rating));
  };

  const handleTextChange = (e) => {
    setRating((prevRating) => ({ ...prevRating, ["text"]: e.target.value }));
    localStorage.setItem("rating", JSON.stringify(rating));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({
        imageUrl: rating.imageUrl,
        rating: rating.rating,
        text: rating.text,
        userId: user.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toastSuccess(
          !data.title ? "Successfully updated" : "Successfully added"
        );
        localStorage.removeItem("rating");
        setTimeout(() => {
          setLoading(true);
          navigate("/user/review", { replace: true });
        }, 5000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toastError("Error Occurred please try again later");
      });
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <h2>Add A Review</h2>
      <form className="w-full">
        <div className="flex flex-col items-center gap-1">
          <label>User Image</label>
          <UploadWidget setRating={setRating} rating={rating} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <label>Ratings</label>

          <ReactStars
            fillColor="#48FD4A"
            isHalf={true}
            size={40}
            onChange={handleRatingChange}
            value={rating.rating}
            required
          />

          <div className="flex flex-col items-center gap-1 w-full md:w-[75%]">
            <label>Review</label>

            <textarea
              required
              name="text"
              rows={5}
              value={rating.text}
              onChange={handleTextChange}
              className="md:w-[75%] w-full border-2 border-secondary h-[250px] "
            />
          </div>
        </div>
        <button className="btn mx-auto">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
