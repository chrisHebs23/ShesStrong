/* eslint-disable react/prop-types */
import { FaStarHalf, FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const STAR_COUNT = 5;
  const stars = Array.from({ length: STAR_COUNT }, (i) => <div key={i} />);
  let i;
  for (i = 0; i < review.rating; i++) {
    stars[i] = <FaStar className="star" size={30} />;
  }
  if (review.rating % 1 != 0) {
    stars[i - 1] = (
      <FaStarHalf className="star border border-primary" size={30} />
    );
  }
  // if value is a decimal, add a half star

  return (
    <div className="md:w-[360px] w-[300px] relative grid grid-cols-1 justify-items-center ">
      <div className="overflow-hidden w-[200px] h-[200px] bg-cover rounded-full relative">
        <img
          src={review.img}
          alt={review.name + " profile picture"}
          loading="lazy"
        />
      </div>
      <div className="flex w-full justify-center -mt-[20px] z-10 ">{stars}</div>
      <div className="my-5 flex flex-col text-center ">
        <h3>{review.name}</h3>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
