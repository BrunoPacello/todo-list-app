import React from "react";

function TodoItem({ todo, onComplete, onDelete }) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Desea eliminar esta tarea?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <h3>{todo.name}</h3>
      <p>Owner: {todo.owner}</p>
      <div className="text-content">
        <p>{todo.description}</p>
      </div>

      {todo.completed && <span className="check-icon">✅</span>}

      <button onClick={() => onComplete(todo._id)}>
        {todo.completed ? "Completed" : "Complete"}
      </button>
      <button onClick={() => handleDelete(todo._id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
