DROP TABLE IF EXISTS books_main;
CREATE TABLE IF NOT EXISTS books_main(
  id SERIAL PRIMARY KEY,
  isbn VARCHAR,
  title VARCHAR,
  subtitle VARCHAR(800),
  author VARCHAR,
  description TEXT,
  thumbnail VARCHAR(200),
  pages INTEGER,
  read BOOLEAN
);

DROP TABLE IF EXISTS books_review;
CREATE TABLE IF NOT EXISTS books_review(
  id SERIAL PRIMARY KEY,
  book_id INTEGER,
  user_id INTEGER,
  rev_date DATE,
  rev_body CHAR(1000)
);



-- DROP TABLE IF EXISTS booksUsers;
-- CREATE TABLE IF NOT EXISTS booksUsers(
--   id SERIAL PRIMARY KEY,
--   book_id INTEGER,
--   user_id INTEGER,
--   rev_date DATE,
--   rev_body CHAR(1000)
-- );
