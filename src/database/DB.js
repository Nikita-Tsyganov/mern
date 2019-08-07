import axios from "axios";

const DB = {
  // Get All Todos
  all: () => axios.get("http://localhost:5000/api/todos").then(res => res.data),

  // Get Single Todo
  find: id =>
    axios.get(`http://localhost:5000/api/todos/${id}`).then(res => res.data),

  // Create Todo
  create: title =>
    axios
      .post("http://localhost:5000/api/todos", {
        title
      })
      .then(res => {
        return res.data;
      }),

  // Update Todo
  update: todo =>
    axios
      .patch(`http://localhost:5000/api/todos/${todo._id}`, {
        title: todo.title,
        completed: todo.completed
      })
      .then(res => res.data),

  // Delete Todo
  delete: id =>
    axios.delete(`http://localhost:5000/api/todos/${id}`).then(res => res.data),

  allUsers: () =>
    axios.get("http://localhost:5000/api/users").then(res => res.data),

  findUser: id =>
    axios.get(`http://localhost:5000/api/users/${id}`).then(res => res.data),

  createUser: (name, email, password) => {
    axios
      .post("http://localhost:5000/api/users", {
        email,
        password,
        name
      })
      .then(res => res.data);
  },

  updateUser: user =>
    axios
      .patch(`http://localhost:5000/api/users/${user._id}`, {
        email: user.email,
        hash: user.password,
        name: user.name
      })
      .then(res => res.data),

  deleteUser: id =>
    axios.delete(`http://localhost:5000/api/users/${id}`).then(res => res.data)
};

export default DB;
