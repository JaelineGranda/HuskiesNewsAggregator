const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({ // creates new mongoose schema with properties for todo items
    username: String,
    email: String,
    password: String,
    roles: [ // User object will have a roles array that contains ids as reference
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;