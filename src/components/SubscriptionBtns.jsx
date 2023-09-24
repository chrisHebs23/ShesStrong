/* eslint-disable react/prop-types */
import React from "react";

const SubscriptionBtns = ({ training, setTraining }) => {
  return (
    <div className="my-3 flex justify-center items-center">
      <button
        className={`border rounded-l-full border-highlight p-2 font-display text-lg hover:bg-highlight hover:text-primary decoration-highlight ${
          training === "subscription" && "bg-highlight text-primary"
        }`}
        onClick={() => setTraining("subscription")}
        disabled={training === "subscription"}
      >
        Personally
      </button>
      <button
        className={`border rounded-r-full border-highlight p-2 font-display text-lg hover:bg-highlight hover:text-primary decoration-highlight ${
          training !== "subscription" && "bg-highlight text-primary"
        }
        `}
        onClick={() => setTraining("virtual")}
        disabled={training !== "subscription"}
      >
        Virtual
      </button>
    </div>
  );
};

export default SubscriptionBtns;
