const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// custom imports
const Connect = require('./utils/database_connect');

// options imports on mode
const mode = process.env.NODE_ENV;

if (mode === 'development') {
    require('dotenv').config();
}

// env variables
const port = process.env.PORT || 4000;
const mongoString = process.env.MONGO_STRING || "localhost";

// const varibales

// Set up express
const app = express();
app.use(express.json());
app.use(cors());

// All Logs
console.log(`Mode: ${mode}`);

// Import routes


// Connect to MongoDB
const dbURL = `mongodb://${mongoString}:27017/book`;
Connect(dbURL);

// Error handling
app.use((err, req, res, next) => {
    statusCode = err.statusCode || 500;
    message = err.message || 'Internal Server Error';
    stack = err.stack || '';

    if (mode === 'development') {
        res.status(statusCode).json({
            success: false,
            message: message,
            stack: stack
        });
    } else {
        res.status(statusCode).json({
            success: false,
            message: message
        });
    }
});

// Start express server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});