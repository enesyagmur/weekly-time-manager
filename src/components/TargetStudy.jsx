import React, { useState } from "react";
import "./targetStudy.scss";

const TargetStudy = () => {
  const [takeTargetStudy, setTakeTargetStudy] = useState(
    localStorage.getItem("currentStudy")
  );
  return <div className="target-study">{takeTargetStudy} s</div>;
};

export default TargetStudy;
