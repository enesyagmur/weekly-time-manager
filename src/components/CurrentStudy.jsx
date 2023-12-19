import React, { useEffect, useState } from "react";
import "./studyValue.scss";
import { useSelector } from "react-redux";

const CurrentStudy = () => {
  const currentStudy = useSelector(
    (state) => state.CurrentStudy.currentStudyCount
  );

  return (
    <div className="current-study">
      <h4> Çalışılan</h4> {currentStudy} <p>saat</p>
    </div>
  );
};

export default CurrentStudy;
