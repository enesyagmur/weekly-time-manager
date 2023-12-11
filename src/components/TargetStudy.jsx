import React from "react";
import "./targetStudy.scss";
import { useSelector } from "react-redux";

const TargetStudy = () => {
  const targetStudy = useSelector(
    (state) => state.TargetStudy.targetStudyCount
  );
  return <div className="target-study">{targetStudy} s</div>;
};

export default TargetStudy;
