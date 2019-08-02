const User = require("../models/User.js");

const UserController = {
  // @desc Get All Todos
  all: (req, res) => {
    User.find().then(users => res.json(users));
  },

  // @desc Get A Single Todo
  find: (req, res) => {
    USer.findById(req.params.id).then(user => res.json(user));
  },

  // @desc Create A Todo
  create: (req, res) => {
    new User({
      email: req.body.email,
      hash: req.body.hash
    })
      .save()
      .then(user => res.json(user));
  },

  // @desc Update A Todo
  update: (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      {
        email: req.body.email,
        hash: req.body.hash
      },
      {
        new: true
      }
    ).then(user => res.json(user));
  },

  // @desc Delete A Todo
  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => res.json(user));
  }
};

module.exports = UserController;
