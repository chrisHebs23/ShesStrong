/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useDate from "../../../hooks/useDate";
import Loading from "../../../components/Loading";

const UpcomingSessions = ({ userData, setCurrentView }) => {
  const { returnDate, returnTime } = useDate();

  if (userData.length === 0) {
    <div className="h-[500px]">
      <Loading />
    </div>;
  }

  return (
    <div>
      <h2 className="mb-2">Up Coming Sessions</h2>
      <div className="flex flex-col gap-1">
        {userData.appointments.length > 0 ? (
          <table className="flex flex-col justify-between gap-2 overflow-hidden overflow-y-auto ">
            <tbody>
              <tr>
                <th>Session Type</th>
                <th>Date</th>
                <th>Time</th>
              </tr>

              {userData.appointments.map((appointment, i) => (
                <tr key={i} className="">
                  <td>{appointment.type}</td>
                  <td>{returnDate(appointment.startDate)}</td>
                  <td>{returnTime(appointment.startDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Sessions Book one now</p>
        )}
        <Link to="/user/appointment">
          <button
            className="btn w-1/2 mx-auto"
            onClick={() => setCurrentView("appointments")}
          >
            Book A Session
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingSessions;
