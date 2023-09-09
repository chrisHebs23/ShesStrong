/* eslint-disable react/prop-types */
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const MakeAppointment = ({ user }) => {
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi();
  //     cal("on", {
  //       action: "bookingSuccessful",
  //       callback: (e) => ,
  //     });
  //   })();
  // }, []);
  return (
    <div>
      <Cal
        calLink={import.meta.env.VITE_CAL_LINK}
        config={{
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          userId: user.id,
          theme: "dark",
        }}
      />
    </div>
  );
};

export default MakeAppointment;
