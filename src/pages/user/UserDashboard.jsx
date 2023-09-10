import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./dashboardComponents/UserInfo";
import MakeAppointment from "./dashboardComponents/MakeAppointment";
import Dashboard from "./dashboardComponents/Dashboard";
import { useLocalStorage } from "./dashboardComponents/localStorage";
import UserSubscription from "./dashboardComponents/UserSubscription";

const UserDashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useLocalStorage("view", "dashboard");

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

  const views = {
    dashboard: userData && (
      <Dashboard userData={userData} setCurrentView={setCurrentView} />
    ),
    appointments: userData && (
      <MakeAppointment user={user} userData={userData} checkUser={checkUser} />
    ),
    subscription: userData && <UserSubscription userData={userData} />,
  };

  if (loading && !userData) {
    return <div>loading</div>;
  } else {
    return (
      <div className="screen-padding w-full h-full relative">
        <UserInfo
          user={user}
          setCurrentView={setCurrentView}
          currentView={currentView}
        />
        <div className="h-full object-fill">{views[currentView]}</div>
      </div>
    );
  }
};

export default UserDashboard;
