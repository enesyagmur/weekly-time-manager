import React, { useState } from "react";
import "./studyValue.scss";

const TargetStudy = () => {
  const [takeTargetStudy, setTakeTargetStudy] = useState(
    localStorage.getItem("targetStudy")
  );
  return <div className="target-study">Hedef {takeTargetStudy} s</div>;
};

export default TargetStudy;
