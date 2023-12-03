// Modle import
const Book = require('../models/bookCollectionModel')
const errorHandler = require('../utils/errorHandler');

module.exports = {
    getAllBooksHelper: async (category) => {
        try {
            if (!category) {
                const books = await Book.find();
                return books;
            } else {
                const books = await Book.find({ category });
                return books;
            }
        } catch (err) {
            throw err;
        }
    },

    getBookByIdHelper: async (id) => {
        try {
            const book = await Book.findById(id);

            return book;
        } catch (err) {
            throw err;
        }
    },

    addBookHelper: async (book) => {
        try {
            const bookExist = await Book.findOne({ title: book.title });

            if (bookExist) {
                throw errorHandler(400, 'Book already exist');
            }

            const newBook = new Book(book);
            await newBook.save();
            return newBook;
        } catch (err) {
            throw err;
        }
    },

    updateBookHelper: async (id, book) => {
        try {
            const bookExist = await Book.findById(id);

            if (!bookExist) {
                throw errorHandler(404, 'Book not found');
            }

            const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });

            return updatedBook;
        } catch (err) {
            throw err;
        }
    },

    deleteBookHelper: async (id) => {
        try {
            const bookExist = await Book.findById(id);

            if (!bookExist) {
                throw errorHandler(404, 'Book not found');
            }

            await Book.findByIdAndDelete(id);

            return;
        } catch (err) {
            throw err;
        }
    }
}