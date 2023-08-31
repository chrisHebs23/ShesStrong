import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

const MakeAppointment = () => {
  const handleEventClick = () => {
    console.log("click");
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={[
          { title: "event 1", date: "2023-08-27" },
          { title: "event 2", date: "2023-08-27" },
        ]}
        // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        // select={this.handleDateSelect}
        // eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        // eventsSet={this.handleEvents}
      />
    </div>
  );
};

export default MakeAppointment;
