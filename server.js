const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose.connect
const connection = mongoose.connect;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
//Declare routes
const api = require('./routes/api');
const html = require('./routes/html');
//Declare api routes
app.use('/api', api);
app.use('/html', html);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
