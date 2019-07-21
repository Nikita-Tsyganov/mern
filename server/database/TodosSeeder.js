const mongoose = require("mongoose");
const Todo = require("../models/Todo.js");

// DB Config
const db = require("../config/database.js").mongoURI;

const todos = [
  {
    completed: true,
    _id: "5d340d6a23a0fc74a4609080",
    title: "Get a life",
    __v: 0
  },
  {
    completed: true,
    _id: "5d340d7023a0fc74a4609081",
    title: "Poke the bear",
    __v: 0
  },
  {
    completed: false,
    _id: "5d340d7923a0fc74a4609082",
    title: "Buy groceries",
    __v: 0
  },
  {
    completed: false,
    _id: "5d340d7d23a0fc74a4609083",
    title: "Cook dinner",
    __v: 0
  },
  {
    completed: false,
    _id: "5d340d8d23a0fc74a4609084",
    title: "Find the meaning of life",
    __v: 0
  }
];

// Connect to Mongo and populate the database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected...");
    console.log("Populating Todos Table...");

    Promise.all(todos.map(todo => new Todo(todo).save())).then(() => {
      console.log("Done ✓");
      process.exit();
    });
  })
  .catch(err => console.log(err));
