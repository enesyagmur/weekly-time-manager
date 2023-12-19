import React, { useEffect, useState } from "react";
import "./day.scss";
import { useDispatch } from "react-redux";
import { updateTargetStudyCount } from "../../redux/targetSlice";
import { updateCurrentStudyCount } from "../../redux/currentSlice";

const Day = ({ dayName }) => {
  const [selectedTarget, setSelectedTarget] = useState(false);
  const [studyTime, setStudyTime] = useState();
  const [studyCheck, setStudyCheck] = useState(false);
  const dispatch = useDispatch();

  const [studiedColors, setStudiedColors] = useState({
    bgColor: "#121212",
    brColor: "#d3d3d3",
    opacity: 1,
  });

  const takeTargetSelectedValueFunc = () => {
    return Number(localStorage.getItem("targetSelectedValue"));
  };

  const targetSelectedUpdateFunc = () => {
    const takeValue = takeTargetSelectedValueFunc();
    localStorage.setItem("targetSelectedValue", takeValue + 1);
  };

  const checkSelectedTargetFunc = () => {
    const takeValue = takeTargetSelectedValueFunc();
    if (takeValue === 7) {
      setSelectedTarget(true);
    }
  };

  const returnTargetStudyFunc = () => {
    return Number(localStorage.getItem("targetStudy"));
  };

  const returnCurrentStudyFunc = () => {
    return Number(localStorage.getItem("currentStudy"));
  };

  const studyCheckFunc = () => {
    const thisDayStudy = Number(localStorage.getItem(`${dayName}`));
    if (thisDayStudy !== -1) {
      setStudyTime(Number(thisDayStudy));
      setSelectedTarget(true);
      setStudyCheck(true);
      changeStyleFunc();
    }
  };

  const selectTargetFunc = (targetTimeToday) => {
    setSelectedTarget(true);
    updateTargetStudyFunc(targetTimeToday);
    targetSelectedUpdateFunc();
  };

  const updateTargetStudyFunc = (target) => {
    const takeTargetStudy = returnTargetStudyFunc();
    const afterTodayTargetStudy = takeTargetStudy + target;
    localStorage.setItem("targetStudy", afterTodayTargetStudy);
    dispatch(updateTargetStudyCount(Number(target)));
  };

  const updateCurentStudyFunc = (studiedThisToday) => {
    const currentStudy = returnCurrentStudyFunc();
    const afterTodayCurrentStudy = currentStudy + studiedThisToday;
    localStorage.setItem("currentStudy", afterTodayCurrentStudy);
    dispatch(updateCurrentStudyCount(Number(studiedThisToday)));
  };

  const changeStyleFunc = () => {
    if (studyTime) {
      if (studyTime < 2) {
        setStudiedColors({ bgColor: "#300202", brColor: "red", opacity: 0.5 });
      } else if (studyTime >= 2 && studyTime < 4) {
        setStudiedColors({
          bgColor: "#362600",
          brColor: "#b35f00",
          opacity: 0.5,
        });
      } else if (studyTime >= 4 && studyTime < 10) {
        setStudiedColors({
          bgColor: "#154163",
          brColor: "#56a2e8",
          opacity: 0.5,
        });
      } else if (studyTime >= 4 && studyTime < 10) {
        setStudiedColors({
          bgColor: "#154163",
          brColor: "#56a2e8",
          opacity: 0.5,
        });
      } else if (studyTime >= 10) {
        setStudiedColors({
          bgColor: "#043b0c",
          brColor: "#3a994c",
          opacity: 0.5,
        });
      }
    }
    console.log(studyTime);
  };

  const saveStudiedFunc = () => {
    if (studyTime) {
      updateThisDayStudyFunc(Number(studyTime));
      updateCurentStudyFunc(Number(studyTime));
      setStudyCheck(true);
      changeStyleFunc();
    }
  };

  const updateThisDayStudyFunc = (time) => {
    localStorage.setItem(`${dayName}`, time);
  };

  useEffect(() => {
    checkSelectedTargetFunc();
  }, []);

  useEffect(() => {
    studyCheckFunc();
  }, [studyTime]);

  if (selectedTarget === false) {
    return (
      <div className="day">
        <p className="day-title">{dayName} Hedef</p>
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
        <p className="day-title">{dayName} Çalışma</p>
        {studyCheck ? (
          <div className="studied">
            <p>{studyTime}s</p>
          </div>
        ) : (
          <div className="study">
            <input
              type="text"
              className="study-input"
              onChange={(e) => setStudyTime(e.target.value)}
              placeholder="Saat giriniz"
            />
            <button className="study-save-btn" onClick={saveStudiedFunc}>
              Kayıt
            </button>
          </div>
        )}
      </div>
    );
  }
};

export default Day;
