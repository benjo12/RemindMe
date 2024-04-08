import React, { useState } from "react";
import MyCalendar from "./MyCalendar";
import { FaTrash, FaSignOutAlt } from 'react-icons/fa';

function EventList({ events, onDeleteEvent }) {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleDeleteClick = () => {
    if (selectedEventId !== null) {
      
        onDeleteEvent(selectedEventId);
      
      setSelectedEventId(null);
    }
  };

  const handleCancelClick = () => {
    setSelectedEventId(null);
  };

  return (
    <div>
          {/* <MyCalendar/> */}
        {/* <h2>Events</h2> */}
      {events.map((event) => (
        <article className="event-article" key={event.id}>
          <h3>{event.name}</h3>
          <p>Date: {event.date} - Time: {event.time}</p>
          <button title="Select event" onClick={() => setSelectedEventId(event.id)}>Select</button>
        </article>
      ))}
      {selectedEventId !== null && (
        <div>
          <button className="btn-delete" onClick={handleDeleteClick}><span><FaTrash title="Delete"/></span></button>
          <button className='btn-cancel' onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default EventList;
