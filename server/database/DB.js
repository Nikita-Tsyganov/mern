const axios = require("axios");

const DB = {
  // Get All Todos
  all: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.data),

  // Get Single Todo
  find: id =>
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.data),

  // Create Todo
  create: title =>
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => res.data),

  // Update Todo
  update: todo =>
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        title: todo.title,
        completed: todo.completed
      })
      .then(res => res.data),

  // Delete Todo
  delete: id =>
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.data)
};

module.exports = DB;
