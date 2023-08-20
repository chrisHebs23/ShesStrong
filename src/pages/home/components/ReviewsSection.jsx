import { reviews } from "../../../assets/data/reviews";
import ReviewCard from "./reusable/ReviewCard";

const ReviewsSection = () => {
  return (
    <section className="">
      <h2 className="my-5">
        <span>Reviews</span>
      </h2>
      <div className="w-full relative">
        <div className="w-full flex flex-nowrap overflow-x-scroll justify-between gap-16 scroll-smooth snap-x">
          {reviews.map((review, i) => (
            <div key={i} className="w-full relative snap-center ">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
