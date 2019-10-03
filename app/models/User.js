const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    select: false
  },
  password: String
});

module.exports = mongoose.model("User", UserSchema);
