const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log("Error al conectar con la base de datos", err));

app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
