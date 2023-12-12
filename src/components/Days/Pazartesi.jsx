import React, { useEffect, useState } from "react";
import "./day.scss";

const Pazartesi = () => {
  const [selectedTarget, setSelectedTarger] = useState(false);
  const [hours, setHours] = useState([0, 2, 4]);
  const [studyCheck, setStudyCheck] = useState(false);
  const [studiedColors, setStudiedColors] = useState({
    bgColor: "#121212",
    brColor: "#d3d3d3",
    opacity: 1,
  });

  const studyCheckFunc = () => {
    const thisDayStudy = Number(localStorage.getItem("pazartesi"));
    if (thisDayStudy !== -1) {
      selectTargetFunc(thisDayStudy);
      selectStudiedFunc(thisDayStudy);
    }
  };

  const selectTargetFunc = (targetTime) => {
    setSelectedTarger(true);
    if (targetTime === 5) {
      setHours([0, 2.5, 5]);
    } else if (targetTime === 10) {
      setHours([0, 5, 10]);
    }
  };

  const selectStudiedFunc = (studiedTime) => {
    localStorage.setItem("pazartesi", studiedTime);
    setHours(studiedTime);
    setStudyCheck(true);
    if (studiedTime === 0) {
      setStudiedColors({ bgColor: "#300202", brColor: "red", opacity: 0.5 });
    } else if (studiedTime === 2 || studiedTime === 2.5 || studiedTime === 5) {
      setStudiedColors({
        bgColor: "#362600",
        brColor: "#b35f00",
        opacity: 0.5,
      });
    } else if (studiedTime === 4 || studiedTime === 5 || studiedTime === 10) {
      setStudiedColors({
        bgColor: "#043b0c",
        brColor: "#3a994c",
        opacity: 0.5,
      });
    }
  };

  useEffect(() => {
    studyCheckFunc();
  }, []);

  if (selectedTarget === false) {
    return (
      <div className="day">
        <p className="day-title">Pazartesi Hedef</p>
        <div className="targets">
          <p className="four" onClick={() => selectTargetFunc(4)}>
            4 s
          </p>
          <p className="five" onClick={() => selectTargetFunc(5)}>
            5 s
          </p>
          <p className="ten" onClick={() => selectTargetFunc(10)}>
            10 s
          </p>
        </div>
      </div>
    );
  } else if (selectedTarget === true) {
    return (
      <div
        className="day"
        style={{
          backgroundColor: `${studiedColors.bgColor}`,
          borderColor: `${studiedColors.brColor}`,
          opacity: `${studiedColors.opacity}`,
        }}
      >
        <p className="day-title">Pazartesi Yapılan</p>
        {studyCheck ? (
          <div className="studied">{hours} s</div>
        ) : (
          <div className="study">
            <p className="zero" onClick={() => selectStudiedFunc(hours[0])}>
              {hours[0]} s
            </p>
            <p className="half" onClick={() => selectStudiedFunc(hours[1])}>
              {hours[1]} s
            </p>
            <p className="full" onClick={() => selectStudiedFunc(hours[2])}>
              {hours[2]} s
            </p>
          </div>
        )}
      </div>
    );
  }
};

export default Pazartesi;
