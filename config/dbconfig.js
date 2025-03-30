const mongoose = require('mongoose');

// MongoDB URI from environment variables or hardcoded
const mongoURI = process.env.mongo_url;

// Debugging: Check if mongo_url is loaded correctly
console.log("Mongo URI:", mongoURI);


// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



const connection = mongoose.connection;
connection.on('error',()=>{
    console.log('error connecting to database');
});

connection.on('connected',()=>{
    console.log('Mongo DB connection successful');

});

module.exports = connection;
