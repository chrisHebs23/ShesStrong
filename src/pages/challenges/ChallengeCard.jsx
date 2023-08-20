/* eslint-disable react/prop-types */
import React from "react";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="grid grid-cols-1 justify-items-center ">
      <div className="w-full h-[320px]  overflow-hidden relative">
        <img
          src={challenge.image}
          className="object-cover w-full object-top h-full"
          alt={challenge.name + " picture"}
          loading="lazy"
        />
      </div>
      <div className="text-center my-5 flex flex-col gap-2">
        <h3>{challenge.name}</h3>

        <p>Start Date: {challenge.startDate}</p>
        <p>Hashtag: {challenge.hashtag}</p>
        <p>{challenge.description}</p>
      </div>
    </div>
  );
};

export default ChallengeCard;
