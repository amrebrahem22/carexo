const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require('./routes/user');

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => console.log("Database Connected."));

app.use('/api', userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
