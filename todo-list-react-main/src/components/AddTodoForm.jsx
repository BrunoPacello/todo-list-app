import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [taskName, setTaskName] = useState("");
  const [taskOwner, setTaskOwner] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskOwner && taskDescription) {
      const newTodo = {
        id: Date.now(),
        name: taskName,
        owner: taskOwner,
        description: taskDescription,
        completed: false,
      };
      onAddTodo(newTodo);
      setTaskName("");
      setTaskOwner("");
      setTaskDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Owner"
        value={taskOwner}
        onChange={(e) => setTaskOwner(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm;
