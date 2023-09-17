/* eslint-disable react/prop-types */

import { useState } from "react";
import SessionsBlock from "./SessionsBlock";
import UpcomingSessions from "./UpcomingSessions";
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        setUserData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-col z-10 relative justify-center items-center gap-10 my-12">
      <div className="md:w-[45%]">
        <SessionsBlock userData={userData} />
      </div>
      <div className="w-full md:w-[45%]">
        <UpcomingSessions userData={userData} />
      </div>
    </div>
  );
};

export default Dashboard;
