const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose.connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//Declare routes
const api = require('./routes/api');
const html = require('./routes/html');

//Declare api routes
app.use('/api', api);
app.use('/html', html);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
