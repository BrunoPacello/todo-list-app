const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { name, description, owner } = req.body;
    const newTodo = new Todo({
      name,
      description,
      owner,
      completed: false,
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};
