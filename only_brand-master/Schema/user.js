const mongoose = require("mongoose");

const Schemaa = mongoose.Schema;

const usersSchema = new Schemaa({
  name: String,
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  password: String,
  role: String,
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
