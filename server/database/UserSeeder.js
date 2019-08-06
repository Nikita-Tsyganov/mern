const mongoose = require("mongoose");
const User = require("../models/User.js");

// DB Config
const db = require("../config/database.js").mongoURI;

const users = [
  {
    email: "joefresh@yahoo.com",
    hash: "hashhashhashhashhsah",
    dateJoined: new Date(),
    name: "Joe Fresh",
    _id: "5d340d654a652032sd035481",
    __v: 0
  },
  {
    email: "jimrotten@gmail.com",
    hash: "kekekekkekekek",
    dateJoined: new Date(),
    name: "Jim Rotten",
    _id: "5d340d7923a0fc74a4609082",
    __v: 0
  }
];

// Connect to Mongo and populate the database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected...");
    console.log("Populating User Table...");

    Promise.all(users.map(user => new User(user).save())).then(() => {
      console.log("Done ✓");
      process.exit();
    });
  })
  .catch(err => console.log(err));
