import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

const BACKEND_URL = "http://localhost:3000/api";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error al cargar tareas", error));
  }, []);

  const addTodo = (newTodo) => {
    fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => setTodos((prevTodos) => [...prevTodos, data]))
      .catch((error) => console.error("Error al agregar tarea", error));
  };

  const completeTodo = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);

    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !updatedTodo.completed }),
    }).catch((error) => console.error("Error al actualizar tarea", error));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);

    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    }).catch((error) => console.error("Error al eliminar tarea", error));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        <div className="form-container">
          <AddTodoForm onAddTodo={addTodo} />
        </div>
        <div className="list-container">
          <TodoList
            todos={todos}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
