/* eslint-disable react/prop-types */

import { lazy } from "react";
const SessionsBlock = lazy(() => import("./SessionsBlock"));
const UpcomingSessions = lazy(() => import("./UpcomingSessions"));
import { useUser } from "@clerk/clerk-react";
import Loading from "../../../components/Loading";
import useGet from "../../../hooks/useGet";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();

  const { data, loading, isError } = useGet(
    `${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`,
    true
  );

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[500px] flex flex-col justify-center items-center">
        <h2>Something Went Wrong!</h2>
        <p>Try again later</p>
        <Link to="/">
          <button className="btn">Home Page</button>
        </Link>
      </div>
    );
  }

  if (data) {
    return (
      <div className="flex flex-wrap z-10 relative justify-center gap-10 my-12">
        <div className="w-full md:w-[45%] bg-secondary/10  h-full p-5">
          <SessionsBlock userData={data} />
        </div>
        <div className="w-full md:w-[45%] bg-secondary/10 p-5">
          <UpcomingSessions userData={data} />
        </div>
      </div>
    );
  }
};

export default Dashboard;
