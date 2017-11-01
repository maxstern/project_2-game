const fetch = require('isomorphic-fetch');





function bookSearch(param) {


  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${param}`, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())



};


module.exports = bookSearch;
