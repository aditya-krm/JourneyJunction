import React from "react";
import { useOutletContext } from "react-router-dom";
import ProgressComponent from "../../Components/ProgressComponent/ProgressComponent";

function Progress() {
  const { goals, setGoals } = useOutletContext();

  const goalNames = [...new Set(goals.map((goal) => goal.mainGoal))];

  return (
    <div>
      <h1>Progress Reports</h1>
      {goalNames.map((goalName, index) => (
        <ProgressComponent
          key={index}
          goalName={goalName}
          goals={goals}
          setGoals={setGoals}
        />
      ))}
    </div>
  );
}

export default Progress;
