const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose.connect

//Declare routes

//Declare api routes

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
