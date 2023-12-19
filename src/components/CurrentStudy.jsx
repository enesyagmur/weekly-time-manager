import React, { useEffect, useState } from "react";
import "./currentStudy.scss";
import { useSelector } from "react-redux";

const CurrentStudy = () => {
  const [takeCurrentStudy, setTakeCurrentStudy] = useState(
    localStorage.getItem("currentStudy")
  );

  return <div className="current-study">{takeCurrentStudy} s</div>;
};

export default CurrentStudy;
