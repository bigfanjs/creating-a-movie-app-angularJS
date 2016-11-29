'use strict';

const
  path = require('path'),
  logger = require('morgan'),
  express = require('express'),
  bodyPasrer = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  flash = require('connect-flash');

const app = express();

const
  movies = require('./routes/movies'),
  admin = require('./lib/middleware/admin');

app.use(logger('dev'));
app.use(bodyPasrer.json());
app.use(cookieParser('some secret code'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'some secret code'
}));
app.use(methodOverride());
app.use(flash());
app.use(express.static(path.join(__dirname, './public')));

app.use('/admin/', admin.isAuthenticated());

app.get('/api/movies', movies.listMovies);
app.get('/api/movies/:id', movies.viewMovie);
app.post('/api/movies/', movies.createMovie);
app.put('/api/movies/:id', movies.updateMovie);
app.delete('/api/movies/:id', movies.deleteMovie);

app.listen(8080, function () {
  console.log('Listening on port 8080');
});