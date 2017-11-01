const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Start the app
const app = express();

// Config
app.use(logger('dev'));

// Static config
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

// Views config
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Config port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`Listening on ${port}...`)
});

app.get('/',(req,res) => {
  res.render('home');
});

// Route requires
const bookRoutes = require('./routes/book_routes.js');
app.use('/books',bookRoutes);

// Catch all
app.get('*',(req,res) => {
  res.status(404).send('404 not found :(')
});
