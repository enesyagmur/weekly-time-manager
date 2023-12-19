import React, { useEffect, useState } from "react";
import "./studyValue.scss";
import { useSelector } from "react-redux";

const CurrentStudy = () => {
  const [takeCurrentStudy, setTakeCurrentStudy] = useState(
    localStorage.getItem("currentStudy")
  );

  return <div className="current-study">Çalışılan {takeCurrentStudy} s</div>;
};

export default CurrentStudy;
