import React from "react";
import "./dayList.scss";

import Day from "./Days/Day";

const DayList = () => {
  const days = [
    "Pazartesi",
    "sali",
    "carsamba",
    "persembe",
    "cuma",
    "cumartesi",
    "pazar",
  ];
  return (
    <div className="day-list">
      {days.map((name) => (
        <Day dayName={name} />
      ))}
    </div>
  );
};

export default DayList;
