import React, { useState } from "react";
import "./four.scss";
import { CgDanger } from "react-icons/cg";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const Four = () => {
  const [time, setTime] = useState(4);
  const [studied, setStudied] = useState(false);

  const selectStudiedTime = (studiedTime) => {
    setStudied(true);
    setTime(studiedTime);
    let takeCurrentTime = localStorage.getItem("currentStudy");

    if (takeCurrentTime) {
      if (studiedTime !== 0) {
        const currentStudy = Number(takeCurrentTime) + Number(studiedTime);
        localStorage.setItem("currentStudy", currentStudy);
      }
    } else {
      if (studiedTime !== 0) {
        localStorage.setItem("currentStudy", studiedTime);
      }
    }
  };

  return (
    <div className={studied ? "four-finish" : "four"}>
      <p>{time} s</p>
      {studied ? null : (
        <div className="finish-icons">
          <CgDanger className="icon" onClick={() => selectStudiedTime(0)} />
          <FaCircleHalfStroke
            className="icon"
            onClick={() => selectStudiedTime(2)}
          />
          <FaCircle className="icon" onClick={() => selectStudiedTime(4)} />
        </div>
      )}
    </div>
  );
};

export default Four;
