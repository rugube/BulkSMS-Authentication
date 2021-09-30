const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  company: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 255,
  },
  role: {
    type: String,
    default: "Client",
  },
  verified: {
    type: Boolean,
    default: true,
  },
  verifiedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", userSchema);