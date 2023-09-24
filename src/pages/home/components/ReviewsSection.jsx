import { useState } from "react";
import ReviewCard from "./reusable/ReviewCard";
import Loading from "../../../components/Loading";
import { useEffect } from "react";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/review`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="">
      <h2 className="my-5">
        <span className="underline-effect">Reviews</span>
      </h2>
      <div className="w-full relative">
        <div className="w-full flex flex-nowrap overflow-hidden overflow-x-auto justify-between gap-16 scroll-smooth snap-x">
          {loading ? (
            <div className="h-[500px]">
              <Loading />
            </div>
          ) : (
            reviews.map((review, i) => (
              <div key={i} className="w-full relative snap-center ">
                <ReviewCard review={review} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
