import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MakeAppointment from "./components/MakeAppointment";
import { FaGear } from "react-icons/fa6";

const UserDashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(user.id);
  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/profile/${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .then(async (data) => {
          await setUserData(data);
          !data.subscribed && navigate("/subscription", { replace: true });
          setLoading(false);
        });
    };
    checkUser();
  }, [getToken, navigate, user.id]);

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="screen-padding w-full">
      <div className="object-contain flex flex-col justify-center items-center w-full gap-2">
        <div className="h-full w-full flex flex-col gap-2 items-center justify-center ">
          <div className="h-full w-40 relative">
            <img
              src={user.imageUrl}
              alt={user.fullName + " profile picture"}
              className=" h-full rounded-full"
            />
            <div
              id="setting"
              className="absolute bottom-0 right-0 bg-primary rounded-full w-12 h-12 flex justify-center items-center hover:scale-105 "
            >
              <FaGear size={40} />
            </div>
          </div>

          <div>
            <h2> Hello {user.firstName}</h2>
            {/* <p>{quote}</p> */}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h2>Remaining sessions for this month</h2>
          <h2 className="mark">{userData.sessions}</h2>
        </div>
      </div>

      <div>
        <MakeAppointment user={user} />
      </div>
    </div>
  );
};

export default UserDashboard;
