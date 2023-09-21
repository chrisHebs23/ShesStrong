/* eslint-disable react/prop-types */
import { useUser } from "@clerk/clerk-react";
import Tracks from "./components/Tracks";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.publicMetadata.admin) {
      navigate("/", { replace: true });
    }
  }, []);

  if (user.publicMetadata.admin) {
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
  }
};

export default Admin;
