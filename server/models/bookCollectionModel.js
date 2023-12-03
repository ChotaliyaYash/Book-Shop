const mongoose = require('mongoose');

const bookCollectionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
        },
        description: {
            type: String,
            required: true
        },
        bookPDF: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const BookCollection = mongoose.model('BookCollection', bookCollectionSchema);

module.exports = BookCollection;