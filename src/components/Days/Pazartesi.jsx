import React, { useEffect, useState } from "react";
import "./day.scss";

const Pazartesi = () => {
  const [selectedTarget, setSelectedTarget] = useState(false);
  const [targetTime, setTargetTime] = useState(0);
  const [studiedRate, setstudiedRate] = useState([0, 50, 100]);
  const [studyCheck, setStudyCheck] = useState(false);
  const [studiedColors, setStudiedColors] = useState({
    bgColor: "#121212",
    brColor: "#d3d3d3",
    opacity: 1,
  });

  const returnTargetStudyFunc = () => {
    return Number(localStorage.getItem("targetStudy"));
  };

  const returnCurrentStudyFunc = () => {
    return Number(localStorage.getItem("currentStudy"));
  };

  const studyCheckFunc = () => {
    const thisDayStudy = Number(localStorage.getItem("pazartesi"));
    if (thisDayStudy !== -1) {
      selectTargetFunc(thisDayStudy);
      selectStudiedFunc(thisDayStudy);
    }
  };

  const selectTargetFunc = (targetTimeToday) => {
    setTargetTime(targetTimeToday);
    setSelectedTarget(true);
    updateTargetStudyFunc(targetTimeToday);
  };

  const updateTargetStudyFunc = (targetTimeToday) => {
    const targetStudy = returnTargetStudyFunc();
    const afterTodayTargetStudy = targetStudy + targetTimeToday;
    localStorage.setItem("targetStudy", afterTodayTargetStudy);
  };

  const updateCurentStudyFunc = (studiedThisToday) => {
    const currentStudy = returnCurrentStudyFunc();
    const afterTodayCurrentStudy = currentStudy + studiedThisToday;
    localStorage.setItem("currentStudy", afterTodayCurrentStudy);
  };

  const updadeRateThisDayFunc = (rate) => {
    localStorage.setItem("pazartesiStudiedRate", rate);
  };

  const changeStyleFunc = () => {
    const studyRate = localStorage.getItem("pazartesiStudiedRate");

    if (studyRate === 0) {
      setStudiedColors({ bgColor: "#300202", brColor: "red", opacity: 0.5 });
      setSelectedTarget(true);
      setStudyCheck(true);
    } else if (studyRate === 0.5) {
      setstudiedRate(50);
      setStudiedColors({
        bgColor: "#362600",
        brColor: "#b35f00",
        opacity: 0.5,
      });
      setSelectedTarget(true);
      setStudyCheck(true);
    } else if (studyRate === 1) {
      setstudiedRate(100);
      setStudiedColors({
        bgColor: "#043b0c",
        brColor: "#3a994c",
        opacity: 0.5,
      });
      setSelectedTarget(true);
      setStudyCheck(true);
    }
  };

  const selectStudiedFunc = (rate) => {
    const studyRate = rate / 100;
    const studiedTime = targetTime * studyRate;
    updadeRateThisDayFunc(studyRate);
    updateThisDayStudyFunc(studiedTime);
    updateCurentStudyFunc(studiedTime);
    changeStyleFunc();
  };

  const updateThisDayStudyFunc = (time) => {
    localStorage.setItem("pazartesi", time);
  };

  useEffect(() => {
    studyCheckFunc();
    changeStyleFunc();
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
          <div className="studied">
            <p>{targetTime}s</p>
          </div>
        ) : (
          <div className="study">
            <p
              className="zero"
              onClick={() => selectStudiedFunc(studiedRate[0])}
            >
              {targetTime * 0}s
            </p>
            <p
              className="half"
              onClick={() => selectStudiedFunc(studiedRate[1])}
            >
              {targetTime / 2}s
            </p>
            <p
              className="full"
              onClick={() => selectStudiedFunc(studiedRate[2])}
            >
              {targetTime}s
            </p>
          </div>
        )}
      </div>
    );
  }
};

export default Pazartesi;
