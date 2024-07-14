import React, { useState } from "react";
import "./GoalForm.css";

function GoalForm({ onAddGoal }) {
  const [mainGoal, setMainGoal] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal({
      id: Math.random().toString(36).substr(2, 9),
      day: parseInt(day),
      mainGoal,
      date,
      task,
      desc: desc.split(","),
      status: false,
    });
    setMainGoal("");
    setDay("");
    setDate("");
    setTask("");
    setDesc("");
  };

  return (
    <form className="goalForm-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={mainGoal}
        placeholder="Main Goal"
        onChange={(e) => setMainGoal(e.target.value)}
        required
      />
      <input
        type="number"
        value={day}
        placeholder="Day"
        onChange={(e) => setDay(e.target.value)}
        required
      />
      <input
        type="text"
        value={date}
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={task}
        placeholder="Task"
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <input
        type="text"
        value={desc}
        placeholder="Description (comma separated)"
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
