import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserInfo from "./dashboardComponents/UserInfo";

const UserDashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
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
        setUserData(data);
        !data.subscribed && navigate("/subscription", { replace: true });
        setLoading(false);
      });
  };

  if (loading && !userData) {
    return <div>loading</div>;
  } else {
    return (
      <div className="screen-padding w-full h-full relative">
        <UserInfo user={user} />
        <div className=" w-full h-full">
          <Outlet />
        </div>
      </div>
    );
  }
};

export default UserDashboard;
