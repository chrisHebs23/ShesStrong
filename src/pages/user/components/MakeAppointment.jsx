/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const MakeAppointment = ({ user }) => {
  // useEffect(() => {
  //   const getUser = async () => {
  //     await
  //   }

  //   return () => {
  //     second
  //   }
  // }, [third])

  // useCalendlyEventListener({
  //   onEventScheduled: (e) => {
  //   console.log(e.data.payload),
  // }
  // });

  return (
    <div>
      <InlineWidget
        url="https://calendly.com/shes-strong"
        prefill={{ name: user.firstName, email: user.primaryEmailAddress }}
      />
    </div>
  );
};

export default MakeAppointment;
