/* eslint-disable react/prop-types */
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ClerkLogin from "../../../components/header/ClerkLogin";
import { UserButton } from "@clerk/clerk-react";

const UserInfo = ({ user, setCurrentView, currentView }) => {
  const navData = [
    { name: "Dashboard", value: "dashboard" },
    { name: "Appointments", value: "appointments" },
    { name: "Subscription", value: "subscription" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center relative my-3 ">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden ">
        <img src={user.imageUrl} className="w-[150px]" />
        <UserButton
          appearance={{
            elements: {
              rootBox: "absolute top-0 w-[150px] h-[150px]",
              userButtonBox: "w-[150px] h-[150px]",
              userButtonTrigger: " w-[150px] h-[150px]",
              avatarBox: " hidden w-[150px] h-[150px]",
            },
          }}
          afterSignOutUrl="/"
        />
      </div>

      <div className="mt-2">
        <h3>{user.firstName}</h3>
      </div>

      <div>
        <ul className="flex gap-2 md:gap-5">
          {navData.map((nav, i) => (
            <button
              className={`${currentView === nav.value && "mark "} p-2  text-lg`}
              key={i}
              disabled={currentView === nav.value}
              onClick={() => setCurrentView(nav.value)}
            >
              <li>{nav.name}</li>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
