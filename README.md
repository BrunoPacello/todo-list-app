# Todo List App - React & Node.js

Este es un proyecto de lista de tareas (TODO List) donde el frontend está construido con **React** y el backend con **Node.js** utilizando **Express** y **MongoDB** como base de datos. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tareas.

## Tecnologías Utilizadas

- **Frontend:** React
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Autenticación (opcional):** JWT (no implementado)
- **Estilos:** CSS

## Requisitos

1. **Node.js**: Asegúrate de tener instalado Node.js (versión recomendada: 16.x o superior).
2. **MongoDB**: Si no tienes MongoDB instalado localmente, puedes utilizar [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para obtener una base de datos en la nube.
3. **npm o yarn**: Para manejar las dependencias.

## Instrucciones de Instalación

### Backend

1. Clona el repositorio y navega a la carpeta del backend:

   ```bash
   git clone https://github.com/BrunoPacello/todo-list-app.git
   cd todolist-app/todo-list-backend

2.Instala las dependencias del backend:

npm install

3.Asegúrate de que MongoDB esté corriendo o de que hayas configurado una base de datos en MongoDB Atlas.

-mongodb://localhost:27017

4.Inicia el servidor del backend:

Node App.js

El servidor backend debería estar corriendo en http://localhost:3000

Frontend

1.En otra terminal, navega a la carpeta del frontend:

cd todolist-app/todo-list-react-main

2.Instala las dependencias del frontend:

npm install

3.Inicia el servidor del frontend:

npm run dev

Conexión entre Frontend y Backend

El frontend se comunica con el backend a través de los siguientes endpoints:

-GET /api/todos: Obtiene todas las tareas.
-POST /api/todos: Crea una nueva tarea.
-PUT /api/todos/:id: Actualiza una tarea (completar/desmarcar).
-DELETE /api/todos/:id: Elimina una tarea.

Asegúrate de que ambos servidores (frontend y backend) estén en ejecución para que la aplicación funcione correctamente.

Funcionalidades
1.Crear tarea: Puedes agregar nuevas tareas a la lista desde el formulario en el frontend.
2.Leer tareas: Las tareas existentes se cargan y muestran en la interfaz de usuario.
3.Actualizar tarea (completar): Puedes marcar una tarea como completada o desmarcarla.
4.Eliminar tarea: Puedes eliminar una tarea de la lista de tareas.

Pruebas

1.Abre el frontend en tu navegador (http://localhost:3001).

2.Interactúa con la aplicación para crear, completar, y eliminar tareas.

3.Si prefieres probar la API directamente, puedes utilizar herramientas como Postman o Insomnia con los siguientes endpoints:

-GET /api/todos: Obtiene todas las tareas.
-POST /api/todos: Crea una nueva tarea.
-PUT /api/todos/:id: Actualiza una tarea (completar/desmarcar).
-DELETE /api/todos/:id: Elimina una tarea.
