import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserInfo from "./dashboardComponents/UserInfo";
import Loading from "../../components/Loading";

const UserDashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

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
        !data.subscribed && navigate("/subscription", { replace: true });
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="screen-padding w-full h-full relative">
      <UserInfo user={user} />
      <div className=" w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
