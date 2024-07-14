import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import GoalModal from "../../Components/GoalModal/GoalModal"; // Import GoalModal
import { goalsData as initialGoalsData } from "../../test/MakeGoalData.js";
import "./MainLayout.css";

function MainLayout() {
  const [goals, setGoals] = useState(initialGoalsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar onAddGoal={() => setIsModalOpen(true)} /> {/* Trigger modal */}
      <div className="main-layout">
        <LeftSideBar />
        <div className="content-area">
          <Outlet context={{ goals, setGoals }} />
        </div>
      </div>
      {isModalOpen && (
        <GoalModal
          closeDialog={() => setIsModalOpen(false)}
          onAddGoal={handleAddGoal}
        />
      )}
    </div>
  );
}

export default MainLayout;
