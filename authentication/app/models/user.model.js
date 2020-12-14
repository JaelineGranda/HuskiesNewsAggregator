const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({ // creates new mongoose schema with properties for todo items
    username: String,
    email: String,
    password: String,
    countries: {
      type: Array,
      default: ["United States of America", "United Kingdom", "Canada", "China", "Russia", "France",
                "Philippines", "United Arab Emirates", "Australia", "Argentina", "South Korea", "Indonesia"]
      },
    categories: {
      type: Array,
      default: ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
    },
    roles: [ // User object will have a roles array that contains ids as reference
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;