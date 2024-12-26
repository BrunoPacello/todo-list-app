import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <div className="list-container">
      {todos.length === 0 ? (
        <p>No hay tareas disponibles</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
