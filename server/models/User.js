const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    hash: String,
    required: true
  },
  joined: {
    default: new Date()
  }
});

module.exports = mongoose.model("User", UserSchema);
