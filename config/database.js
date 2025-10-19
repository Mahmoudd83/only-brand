// connection to database
require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;
const dbconnection = () => {
  mongoose
      .connect(uri)
      .then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
      })};

module.exports=dbconnection;