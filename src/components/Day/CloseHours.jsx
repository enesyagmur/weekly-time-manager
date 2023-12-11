import React from "react";
import "./closeHours.scss";

const CloseHours = ({ setClickCheck, dayName }) => {
  return (
    <div className="close-hours" onClick={() => setClickCheck(true)}>
      {dayName}
    </div>
  );
};

export default CloseHours;
