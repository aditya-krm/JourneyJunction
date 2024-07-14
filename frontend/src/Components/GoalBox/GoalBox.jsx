import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./GoalBox.css";

function GoalBox({ day, date, task, desc, status, onStatusChange }) {
  return (
    <div className="Goal-Box" onClick={onStatusChange}>
      <div className="current-day">
        <h2>Day {day}</h2>
        <h4>{date}</h4>
      </div>
      <h4 id="heading">Today's Task: {task}</h4>
      <ul>
        {desc.map((d, index) => {
          return <li key={index}>{d}</li>;
        })}
      </ul>
      <div className="checkbox-container">
        <Checkbox checked={status} onChange={onStatusChange} />
      </div>
    </div>
  );
}

export default GoalBox;
