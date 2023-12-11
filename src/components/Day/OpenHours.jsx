import React, { useState } from "react";
import "./openHours.scss";
import Four from "./Four";
import Five from "./Five";
import Ten from "./Ten";

const OpenHours = () => {
  const [hourSelected, setHourSelected] = useState(0);

  const selectTargetHour = (time) => {
    setHourSelected(time);
    const takeTargetTime = localStorage.getItem("targetStudy");
    if (takeTargetTime) {
      const targetStudy = Number(takeTargetTime) + Number(time);
      localStorage.setItem("targetStudy", targetStudy);
    } else {
      localStorage.setItem("targetStudy", time);
    }
  };

  if (hourSelected === 0) {
    return (
      <div className="open-hours">
        <p className="four" onClick={() => selectTargetHour(4)}>
          4 s
        </p>
        <p className="five" onClick={() => selectTargetHour(5)}>
          5 s
        </p>
        <p className="ten" onClick={() => selectTargetHour(10)}>
          10 s
        </p>
      </div>
    );
  } else if (hourSelected === 4) {
    return <Four />;
  } else if (hourSelected === 5) {
    return <Five />;
  } else if (hourSelected === 10) {
    return <Ten />;
  }
};

export default OpenHours;

/*
 return (
    <>
      {hourSelected ? (
        <p></p>
      ) : (
        <div className="open-hours">
          <p className="four" onClick={() => selectHour("Four")}>
            4 s
          </p>
          <p className="five" onClick={() => selectHour("Five")}>
            5 s
          </p>
          <p className="ten" onClick={() => selectHour("Ten")}>
            10 s
          </p>
        </div>
      )}
    </>
  );
*/
