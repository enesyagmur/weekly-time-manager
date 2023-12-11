import React, { useEffect, useState } from "react";
import "./openHours.scss";
import Four from "./Four";
import Five from "./Five";
import Ten from "./Ten";
import { useDispatch } from "react-redux";
import { updateTargetStudyCount } from "../../redux/targetSlice";

const OpenHours = () => {
  const [hourSelected, setHourSelected] = useState(0);
  const dispatch = useDispatch();
  const selectTargetHour = (selectedTime) => {
    setHourSelected(selectedTime);
    let takeTargetTime = localStorage.getItem("targetStudy");
    const targetStudy = Number(takeTargetTime) + Number(selectedTime);
    localStorage.setItem("targetStudy", targetStudy);
    dispatch(updateTargetStudyCount());
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
