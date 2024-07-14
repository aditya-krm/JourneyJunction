import React from "react";
import "./ProgressBar.css";

function ProgressBar({ value, max }) {
  const progressPercentage = ((value / max) * 100).toFixed(2);

  return (
    <div className="progressBar">
      <p>{`Current progress: ${progressPercentage}%`}</p>
      <div className="progress-bar">
        <div
          className="progress-bar-completed"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
