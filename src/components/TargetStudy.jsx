import React, { useState } from "react";
import "./studyValue.scss";
import { useSelector } from "react-redux";

const TargetStudy = () => {
  const targetStudy = useSelector(
    (state) => state.TargetStudy.targetStudyCount
  );
  return (
    <div className="target-study">
      {" "}
      <h4> Hedef</h4> {targetStudy} <p>saat</p>
    </div>
  );
};

export default TargetStudy;
