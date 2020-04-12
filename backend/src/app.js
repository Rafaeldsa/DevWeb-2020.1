const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const requireDir = require("require-dir");
const cors = require("cors");
const routes = require("./routes");

const app = express();
//app.use(express.urlencoded({ extended: true }));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose default connection is open");
});

db.on("error", (err) => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on("disconnected", () => {
  console.log("Mongoose default connection is disconnected");
});

process.on("SIGINT", () => {
  db.close(() => {
    console.log(
      "Mongoose default connection is disconnected due to application termination"
    );
    process.exit(0);
  });
});

app.use(cors());
app.use(express.json());

requireDir("./models");

//rota 1

app.use(routes);

module.exports = app;
