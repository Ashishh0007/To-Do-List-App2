// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect(process.env.MONGO_URL);

// acquire the connection to check if it is connected successfully
const db = mongoose.connection;

// show error if it is not connected to the database
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// if up and running then print the message
db.once('open', function() {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;