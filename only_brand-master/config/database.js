// connection to database
require("dotenv").config();
const mongoose = require("mongoose");

// mongodb+srv://mahmoudyou144:mh123mh@mahmoud1.cfqy0.mongodb.net/?retryWrites=true&w=majority&appName=Mahmoud1
const uri = process.env.MONGO_URI;
const dbconnection = () => {
  mongoose
      .connect(uri)
      .then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
      })};

module.exports=dbconnection;