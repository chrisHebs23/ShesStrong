/* eslint-disable react/prop-types */

import SessionsBlock from "./SessionsBlock";
import UpcomingSessions from "./UpcomingSessions";

const Dashboard = ({ userData, setCurrentView }) => {
  return (
    <div className="flex flex-col z-10 relative justify-center items-center gap-10 my-12">
      <div className="md:w-[45%]">
        <SessionsBlock userData={userData} setCurrentView={setCurrentView} />
      </div>
      <div className="w-full md:w-[45%]">
        <UpcomingSessions userData={userData} setCurrentView={setCurrentView} />
      </div>
    </div>
  );
};

export default Dashboard;
