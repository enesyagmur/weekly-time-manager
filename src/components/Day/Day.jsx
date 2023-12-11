import React, { useState } from "react";
import "./day.scss";
import OpenHours from "./OpenHours";
import CloseHours from "./CloseHours";

const Day = ({ dayName }) => {
  const [clickCheck, setClickCheck] = useState(false);

  return (
    <div className="day">
      {clickCheck ? (
        <OpenHours />
      ) : (
        <CloseHours dayName={dayName} setClickCheck={setClickCheck} />
      )}
    </div>
  );
};

export default Day;
