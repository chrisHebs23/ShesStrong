import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserReview = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      setLoading(true);
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/review/user/${user.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
          setReview(data);
        })
        .catch((err) => {
          setLoading(false);
        });
    };
    getReview();
  }, []);

  if (loading) return <div>Loading</div>;

  if (Object.keys(review).length === 0)
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <h3>No Review added yet</h3>
        <Link to="/user/add-review">
          <button className="btn">Add a review</button>
        </Link>
      </div>
    );

  return <div></div>;
};

export default UserReview;
