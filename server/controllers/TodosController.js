const Todo = require("../models/Todo.js");

const TodosController = {
  // @desc Get All Todos
  all: (req, res) => {
    Todo.find().then(todos => res.json(todos));
  },

  // @desc Get A Single Todo
  find: (req, res) => {
    Todo.findById(req.params.id).then(todo => res.json(todo));
  },

  // @desc Create A Todo
  create: (req, res) => {
    new Todo({
      title: req.body.title
    })
      .save()
      .then(todo => res.json(todo));
  },

  // @desc Update A Todo
  update: (req, res) => {
    Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed
      },
      {
        new: true
      }
    ).then(todo => res.json(todo));
  },

  // @desc Delete A Todo
  delete: (req, res) => {
    Todo.findByIdAndRemove(req.params.id).then(todo => res.json(todo));
  }
};

module.exports = TodosController;
