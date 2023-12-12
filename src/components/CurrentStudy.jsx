import React from "react";
import "./currentStudy.scss";
import { useSelector } from "react-redux";

const CurrentStudy = () => {
  const currentStudy = useSelector(
    (state) => state.CurrentStudy.currentStudyCount
  );

  return <div className="current-study">{currentStudy} s</div>;
};

export default CurrentStudy;
