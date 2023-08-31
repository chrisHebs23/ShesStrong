import { redirect } from "react-router-dom";
import AccountProfile from "./AccountProfile";
import { useUser } from "@clerk/clerk-react";

const Onboarding = () => {
  const { user } = useUser();

  const userInfo = {};

  if (!user) {
    return redirect("/");
  }

  const userData = {
    id: user?.id,
    email: userInfo?.email || user?.emailAddresses,
    objectId: userInfo?._id,
    name: userInfo?.name || user?.firstName,
    goal: userInfo?.goal,
    image: user?.imageUrl,
    phoneNumber: userInfo?.phoneNumber,
  };

  return (
    <div className="screen-padding">
      <h3>Onboarding</h3>
      <p>
        Complete your profile now <em>{user?.firstName}</em> to use She&apos;s
        Strong
      </p>
      <section className="bg-secondary/10 p-3">
        <AccountProfile
          user={userData}
          btnTitle="Continue"
          redirectUrl="/subscription"
        />
      </section>
    </div>
  );
};

export default Onboarding;
