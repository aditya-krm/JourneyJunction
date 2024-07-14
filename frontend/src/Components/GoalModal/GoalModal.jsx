import React from "react";
import GoalForm from "../GoalForm/GoalForm";
import "./GoalModal.css";

function GoalModal({ closeDialog, onAddGoal }) {
  return (
    <div className="dialog-backdrop">
      <div className="goal-modal">
        <div className="goal-modal-header">
          <h3>New Goal</h3>
          <button className="close-modal" onClick={closeDialog}>
            X
          </button>
        </div>
        <div className="goal-modal-body">
          <GoalForm onAddGoal={onAddGoal} />
        </div>
      </div>
    </div>
  );
}

export default GoalModal;
