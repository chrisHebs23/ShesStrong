/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SessionsBlock = ({ userData }) => {
  let percentage = Math.round(
    (userData.sessions / userData.totalSessions) * 100
  );
  return (
    <div className=" w-full flex flex-col justify-center items-center relative">
      <div className="w-[100px] h-[100px] rounded-full border-4 border-highlight flex justify-center items-center ">
        <div className="bg-secondary/30 backdrop-blur-xl -z-10 absolute w-[100px] h-[100px] rounded-full"></div>
        <Link to="user/subscription">
          <div className="flex flex-row h-[70px] p-2">
            <h2
              className={`${
                percentage > 66
                  ? "text-highlight"
                  : percentage < 33
                  ? " text-red-600"
                  : " text-orange-400"
              } self-start`}
            >
              {userData.sessions}
            </h2>
            <h2 className="self-center">/</h2>
            <h2 className="self-end">{userData.totalSessions}</h2>
          </div>
        </Link>
      </div>

      <h2 className="mt-5">Available Sessions</h2>
      <button
        onClick={() =>
          (window.location.href =
            import.meta.env.VITE_STRIPE_CUSTOMER_PORTAL_URL)
        }
        className="btn"
      >
        Manage Billing
      </button>
    </div>
  );
};

export default SessionsBlock;
