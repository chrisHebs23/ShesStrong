/* eslint-disable react/prop-types */
import { FaStarHalf, FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const STAR_COUNT = 5;
  const stars = Array.from({ length: STAR_COUNT }, (i) => <div key={i} />);
  let i;
  for (i = 0; i < review.rating; i++) {
    stars[i] = <FaStar className="star" key={i} size={30} />;
  }
  if (review.rating % 1 != 0) {
    stars[i - 1] = <FaStarHalf className="star" key={i} size={30} />;
  }
  // if value is a decimal, add a half star

  return (
    <div className="md:w-[360px] w-[250px] relative grid grid-cols-1 justify-items-center ">
      <div
        style={{ backgroundImage: `url(${review.imageUrl})` }}
        className={`w-[200px] h-[200px] rounded-full overflow-hidden bg-center bg-cover`}
      ></div>
      <div className="flex w-full justify-center -mt-[20px] z-10 ">{stars}</div>
      <div className="my-5 flex flex-col text-center ">
        <h3>{review.name}</h3>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
