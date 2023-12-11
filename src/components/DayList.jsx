import React, { useState } from "react";
import "./dayList.scss";
import Day from "./Day/Day";

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
      {days.map((name, index) => (
        <Day dayName={name} key={index} />
      ))}
    </div>
  );
};

export default DayList;
