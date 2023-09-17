/* eslint-disable react/prop-types */
import Tracks from "./components/Tracks";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex flex-col screen-padding justify-center items-center w-full h-full gap-5 bg-hero-image bg-cover bg-center">
      <div className="w-full">
        <Tracks />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
