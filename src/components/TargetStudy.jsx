import React, { useState } from "react";
import "./targetStudy.scss";

const TargetStudy = () => {
  const [takeTargetStudy, setTakeTargetStudy] = useState(
    localStorage.getItem("targetStudy")
  );
  return <div className="target-study">{takeTargetStudy} s</div>;
};

export default TargetStudy;
