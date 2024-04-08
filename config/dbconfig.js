const mongoose = require('mongoose');

// MongoDB URI from environment variables or hardcoded
const mongoURI = process.env.mongo_url;

// Connect to MongoDB
mongoose.connect(mongoURI);


const connection = mongoose.connection;
connection.on('error',()=>{
    console.log('error connecting to database');
});

connection.on('connected',()=>{
    console.log('Mongo DB connection successful');

});

module.exports = connection;