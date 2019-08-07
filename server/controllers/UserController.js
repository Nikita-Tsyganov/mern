const User = require("../models/User.js");

const UserController = {
  // @desc Get All Todos
  all: (req, res) => {
    User.find().then(users => res.json(users));
  },

  // @desc Get A Single Todo
  find: (req, res) => {

    User.findById(req.params.id).then(user => res.json(user));

  },

  // @desc Create A Todo
  create: (req, res) => {
    console.log(req.body);
    new User({
      email: req.body.email,
      hash: req.body.hash,
      //dateJoined: req.body.dateJoined,
      name: req.body.name

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
        hash: req.body.hash,
        dateJoined: req.body.date,
        name: req.body.name
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
