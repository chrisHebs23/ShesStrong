/* eslint-disable react/prop-types */

const UpcomingSessions = ({ userData, setCurrentView }) => {
  const returnDate = (dateItem) => {
    const date = new Date(dateItem);

    let year = date.getYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return `${mm}/${dd}/${year}`;
  };

  const returnTime = (timeItem) => {
    const date = new Date(timeItem);

    return date.toLocaleTimeString();
  };

  return (
    <div>
      <h2 className="mb-2">Up Coming Sessions</h2>
      <div className="flex flex-col gap-1">
        <table className="flex flex-col justify-between gap-2 ">
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
        <button
          className="btn w-1/2 mx-auto"
          onClick={() => setCurrentView("appointments")}
        >
          Book A Session
        </button>
      </div>
    </div>
  );
};

export default UpcomingSessions;
