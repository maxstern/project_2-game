const Books = require('../models/books.js');
const bookSearch = require('../booksearch/booksearch-helper.js')

const bookController = {};

bookController.index = (req, res) => {
  Books.findAll().then((book) => {
      console.log(book)
      res.render('index', {book: book});
      // res.render('books/book-index', {
      //   data: books,
      // })
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
  });
};

bookController.show = (req, res) => {
  Books.findById(req.params.id).then((book) => {
    //console.log(book)
    res.render('book', {book: book});
  }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
  })
};




bookController.info = (req, res) => {
  Books.findById(req.params.id).then((book) => {
    //console.log(book)
    res.render('book', {book: book});
  }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
  })
};


bookController.search = (req, res) => {
  bookSearch(req.query.q).then((searchbooks) => {
    //console.log(searchbooks)
    res.render('results', {searchbooks: searchbooks});
  }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
  })
};



bookController.create = (req, res) => {

  console.log("!!!!" + req.body.title);
  console.log("****" + req.body.author);

  Books.create({

    isbn: req.body.isbn,
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    pages: req.body.pages

  }).then((book) => {
    console.log("BOOK: " + book)
    //res.render('index', {book: book});


  }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
  })
};




bookController.delete = (req, res) => {
  Books.destroy(req.params.id).then(
    res.redirect('/books')).catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Delete failed',
        error: err,
      });
    });
};





module.exports = bookController;
