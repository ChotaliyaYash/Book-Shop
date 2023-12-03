const {
    getAllBooksHelper,
    getBookByIdHelper,
    addBookHelper,
    updateBookHelper,
    deleteBookHelper,
} = require('../helpers/bookCollectionHelper')

const errorHandler = require('../utils/errorHandler');

module.exports = {
    // get all books
    getAllBooks: async (req, res, next) => {
        try {
            // query params
            let { category } = req.query;

            category = category.charAt(0).toUpperCase() + category.slice(1);

            const books = await getAllBooksHelper(category);

            return res.status(200).json({
                success: true,
                message: 'Successfully retrieved all books',
                data: books
            });
        } catch (err) {
            throw err;
        }
    },

    // get book by id
    getBookById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const book = await getBookByIdHelper(id);

            return res.status(200).json({
                success: true,
                message: 'Successfully retrieved book by id',
                data: book
            });

        } catch (err) {
            throw err;
        }
    },

    // upload book
    addBook: async (req, res, next) => {
        try {
            const { title, author, category, imageURL, description, bookPDF } = req.body

            if (!title || !author || !category || !description || !bookPDF) {
                throw errorHandler(400, 'Please fill in all fields');
            }

            const newBook = await addBookHelper({
                title,
                author,
                category,
                imageURL,
                description,
                bookPDF,
            });

            return res.status(200).json({
                success: true,
                message: 'Successfully added book',
                data: newBook
            });
        } catch (err) {
            next(err);
        }
    },

    // update book
    updateBook: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { title, author, category, imageURL, description, bookPDF } = req.body;

            const updatedBook = await updateBookHelper(id, {
                title,
                author,
                category,
                imageURL,
                description,
                bookPDF,
            });

            return res.status(200).json({
                success: true,
                message: 'Successfully updated book',
                data: updatedBook
            });
        } catch (err) {
            next(err);
        }
    },

    // delete book
    deleteBook: async (req, res, next) => {
        try {
            const { id } = req.params;

            const deletedBook = await deleteBookHelper(id);

            return res.status(200).json({
                success: true,
                message: 'Successfully deleted book',
                data: deletedBook
            });
        } catch (err) {
            next(err);
        }
    }
}