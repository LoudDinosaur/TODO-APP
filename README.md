# TODO-API
A simple RESTful API for managing todo items built with **Node.js**, **Express**, and **MongoDB**. This API allows users to create, retrieve, update, and delete todo items efficiently.

## 🚀 Features
- **Create** new todo items
- **Retrieve** a specific todo item
- **Retrieve** all todo items by ID
- **Update** a specific todo item by ID
- **Delete** a specific todo item by ID

## 🛠️ Tech Stack
- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for storing todo items
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **Nodemon**: Tool for automatically restarting the server during development
- **Dotenv**: Module for loading environment variables from a `.env` file

The API will be running on **https://localhost:4000/api/v1**

##📡 API Endpoints
1. POST **/createTodo**: Create a new todo item
2. GET **/getTodo**: Retrieve a specific todo item
3. GET **/getTodos/:id**: Retrieve a specific todo item by ID
4. PUT **/updateTodo/:id**: Update a specific todo item by ID
5. DELETE **/deleteTodo/:id**: Delete a specific todo item by ID

🔧 Usage
1. **Create Todo**: Send a POST request to /createTodo with title and description.
2. **Get Todo**: Send a GET request to /getTodo.
3. **Get Todo by I**D: Send a GET request to /getTodos/:id.
4. **Update Todo**: Send a PUT request to /updateTodo/:id with updated data.
5. **Delete Todo**: Send a DELETE request to /deleteTodo/:id.
