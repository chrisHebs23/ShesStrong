/* eslint-disable react/prop-types */

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="grid grid-cols-1 justify-items-center ">
      <div className="w-full h-[320px] overflow-hidden relative">
        <img
          src={challenge.bannerImage}
          className="object-cover w-full object-top h-full"
          alt={challenge.title + " picture"}
          loading="lazy"
        />
      </div>
      <div className="text-center my-5 flex flex-col gap-2">
        <h3>{challenge.title}</h3>

        <p>Start Date: {challenge.startDate}</p>
        <p>Hashtag: {challenge.hashtags}</p>
        <p>{challenge.description}</p>
      </div>
    </div>
  );
};

export default ChallengeCard;
