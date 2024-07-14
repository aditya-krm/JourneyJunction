import React from "react";
import { useOutletContext } from "react-router-dom";
import "./RightSideBar.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function RightSideBar() {
  const { goals } = useOutletContext();

  const completedGoals = goals.filter((goal) => goal.status).length;
  const totalGoals = goals.length;
  const progressValue = totalGoals ? (completedGoals / totalGoals) * 100 : 0;

  // Categorize goals by main goal
  const mainGoals = goals.reduce((acc, goal) => {
    acc[goal.mainGoal] = acc[goal.mainGoal] || { completed: 0, total: 0 };
    acc[goal.mainGoal].total += 1;
    if (goal.status) acc[goal.mainGoal].completed += 1;
    return acc;
  }, {});

  return (
    <div className="progress-bar-box">
      <h2>Progress Overview</h2>
      <ProgressBar value={progressValue} max={100} />
      <p>
        {completedGoals} out of {totalGoals} goals completed
      </p>
      {Object.entries(mainGoals).map(([goalName, { completed, total }]) => (
        <div key={goalName} className="goal-progress">
          <h3>{goalName}</h3>
          <ProgressBar value={(completed / total) * 100} max={100} />
          <p>
            {completed} out of {total} goals completed
          </p>
        </div>
      ))}
    </div>
  );
}

export default RightSideBar;
