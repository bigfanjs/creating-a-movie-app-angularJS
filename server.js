'use strict';

const
  path = require('path'),
  logger = require('morgan'),
  express = require('express'),
  bodyPasrer = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override');

const app = express();

const
  movies = require('./routes/movies'),
  login = require('./routes/login'),
  admin = require('./lib/middleware/admin'),
  isAuthenticated = admin.isAuthenticated;

app.use(logger('dev'));
app.use(bodyPasrer.json());
app.use(cookieParser('some secret code'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'some secret code'
}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, './public')));

app.post('/admin/login', login.submit);

app.get('/api/movies', movies.listMovies);
app.get('/api/movies/:id', movies.viewMovie);
app.post('/api/movies/', isAuthenticated(), movies.createMovie);
app.put('/api/movies/:id', isAuthenticated(), movies.updateMovie);
app.delete('/api/movies/:id', isAuthenticated(), movies.deleteMovie);

/* reroute all the requests back to the public/app.html*/
app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, './public')
  });
});

app.listen(8080, function () {
  console.log('Listening on port 8080');
});