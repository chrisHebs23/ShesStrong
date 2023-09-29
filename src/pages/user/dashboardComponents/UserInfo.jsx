/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const UserInfo = ({ user }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative my-3 ">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden ">
        <img src={user.imageUrl} className="w-[150px]" />
        <UserButton
          appearance={{
            elements: {
              rootBox: "absolute top-0 w-[150px] h-[150px]",
              userButtonBox: "w-[150px] h-[150px]",
              userButtonTrigger: "w-[150px] h-[150px]",
              avatarBox: "hidden w-[150px] h-[150px]",
            },
          }}
          afterSignOutUrl="/"
        />
      </div>

      <div className="mt-2">
        <h3>{user.firstName}</h3>
      </div>
      <button
        onClick={() =>
          (window.location.href =
            import.meta.env.VITE_STRIPE_CUSTOMER_PORTAL_URL)
        }
        className="btn"
      >
        Manage Billing
      </button>

      <div>
        <ul className="flex gap-2 md:gap-5">
          <NavLink
            to=""
            className={({ isActive }) => isActive && "text-highlight"}
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-highlight"}
            to="appointment"
          >
            Book Appointment
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive && "text-highlight"}
            to="review"
          >
            Review
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
