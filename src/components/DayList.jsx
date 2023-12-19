import React from "react";
import "./dayList.scss";

import Day from "./Days/Day";

const DayList = () => {
  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
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
