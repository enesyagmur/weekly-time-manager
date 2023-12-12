import React, { useState } from "react";
import "./dayList.scss";
import Pazartesi from "./Days/Pazartesi";
import Sali from "./Days/Sali";
import Carsamba from "./Days/Carsamba";
import Persembe from "./Days/Persembe";
import Cuma from "./Days/Cuma";
import Cumartesi from "./Days/Cumartesi";
import Pazar from "./Days/Pazar";

const DayList = () => {
  return (
    <div className="day-list">
      <Pazartesi />
      <Sali />
      <Carsamba />
      <Persembe />
      <Cuma />
      <Cumartesi />
      <Pazar />
    </div>
  );
};

export default DayList;
