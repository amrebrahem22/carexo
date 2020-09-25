const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => console.log("Database Connected."));

app.get("/", (req, res) => {
  res.send("hello World");
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
