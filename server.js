'use strict';

const
  path = require('path'),
  logger = require('morgan'),
  express = require('express'),
  bodyPasrer = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  multer = require('multer');

const
  app = express(),
  upload = multer({dest: 'tmp/'}),
  join = path.join;

const isAuth = function (req, res, next) {
  const uid = req.session.uid;

  if (uid) {
    return next();
  }

  res.status(401).end('Access Denied');
};

app.set('covers', join(__dirname, './public/images/covers/'));
app.set('avatars', join(__dirname, './public/images/avatars/'));

// require routes:
const
  movies = require('./routes/movies'),
  login = require('./routes/login');

// require middleware:
const admin = require('./lib/middleware/admin');

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
app.use(admin());

app.post('/admin/login', login.submit);

app.get('/session', isAuth, function (req, res) {
  res.send(200, res.admin);
});

app.get('/api/movies', movies.showMovies);
app.get('/api/movies/:id', movies.viewMovie);
app.post('/api/movies/', isAuth, movies.createMovie);
app.put('/api/movies/:id', isAuth, movies.updateMovie);
app.delete('/api/movies/:id', isAuth, movies.deleteMovie);
app.post(
  '/api/movies/:id/cover',
  isAuth,
  upload.single('cover'),
  movies.uploadCover.bind(null, app.get('covers'))
);
app.post(
  '/api/movies/:id/avatars',
  isAuth,
  upload.array('avatars'),
  movies.uploadAvatars.bind(null, app.get('avatars'))
);
// reroute all the requests back to the public/app.html
app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, './public')
  });
});

app.listen(8080, function () {
  console.log('Listening on port 8080');
});