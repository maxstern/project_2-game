const db = require('../db/config');

const Books = {};



Books.findAll = () => {
  return db.query('SELECT * FROM books_main');
};

Books.findById = (id) => {
  return db.one(`SELECT * FROM books_main WHERE id=$1`,id);
};

Books.create = books_main => db.one(`
  INSERT INTO books_main (
    isbn,
    title,
    subtitle,
    author,
    description,
    thumbnail,
    pages
  ) VALUES (
    $/isbn/,
    $/title/,
    $/subtitle/,
    $/author/,
    $/description/,
    $/thumbnail/,
    $/pages/
  )
  RETURNING *`,
  books_main
);

Books.update = books_main => db.one(`
  UPDATE books_main SET
    isbn = $1,
    title = $2,
    author = $3,
    pub_date = $4
  WHERE
    id=$5
  RETURNING *`,
  books_main
);

Books.destroy = id => db.none(`
  DELETE FROM books_main
  WHERE id = $1`,
  [id]
);



module.exports = Books;
