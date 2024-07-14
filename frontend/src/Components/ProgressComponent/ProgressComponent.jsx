import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import GoalBox from "../GoalBox/GoalBox";
import "./ProgressComponent.css";

function ProgressComponent({ goalName, goals, setGoals }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleStatusChange = (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, status: !goal.status } : goal
    );
    setGoals(updatedGoals);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const filteredGoals = goals.filter((goal) => goal.mainGoal === goalName);
  const completedGoals = filteredGoals.filter((goal) => goal.status).length;
  const totalGoals = filteredGoals.length;
  const progressValue =
    totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="dropdown-title" onClick={handleToggle}>
        <h2>{goalName}</h2>
      </div>
      {isExpanded && (
        <div className="goal-details">
          <ProgressBar value={progressValue} max={100} />
          <div className="goal-container">
            {filteredGoals.map((goal) => (
              <GoalBox
                key={goal.id}
                day={goal.day}
                date={goal.date}
                task={goal.task}
                desc={goal.desc}
                status={goal.status}
                onStatusChange={() => handleStatusChange(goal.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressComponent;
