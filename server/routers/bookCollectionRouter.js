// imports
const express = require('express');

// custom imports
const {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
    getBookById
} = require('../controllers/bookCollectionController')

// set up router
const router = express.Router();

// routes
// get all book with filter
router.route('/all-book').get(getAllBooks);

// get book by id
router.route('/book/:id').get(getBookById);

// upload book
router.route('/upload-book').post(addBook);

// update book
router.route('/update-book/:id').patch(updateBook);

// delete book
router.route('/delete-book/:id').delete(deleteBook);


module.exports = router; 