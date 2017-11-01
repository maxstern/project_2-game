const express = require('express');

const bookRoutes = express.Router();
const bookController = require('../controllers/book_controller.js');


// Show all books
bookRoutes.get('/',bookController.index);

// Search for a book (via API)
bookRoutes.get('/search', bookController.search);

// Show more book info
bookRoutes.get('/info/:id', bookController.info);

// Delete a book
bookRoutes.delete('/:id', bookController.delete);

// Show a specific book
bookRoutes.get('/:id', bookController.show);

// Add book from API to DB
bookRoutes.post('/', bookController.create);




// bookRoutes.put('/', bookController.update);
// bookRoutes.delete('/:id', bookController.delete);

module.exports = bookRoutes;
