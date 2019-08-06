const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  hash: {
    type: String
  },
  dateJoined: {
    type: String,
    default: Date.now
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model("User", UserSchema);
