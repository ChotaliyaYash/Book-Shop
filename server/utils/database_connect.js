const mongoose = require('mongoose');

const connect = async (dbURL) => {
    try {
        await mongoose.connect(dbURL, {});

        console.log('Connected to database.');
    } catch (error) {
        console.log('Could not connect to database.', error);
    }
}

module.exports = connect;