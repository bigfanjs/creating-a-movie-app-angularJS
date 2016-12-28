'use strict';

const Movie = require('../models')('movie');

function send404(res, err) {
  res.status(404).end(err);
}

exports.listMovies = function (req, res, next) {
  const callback = function (err, movies) {
    if ( err ) { return send404(res, err); }

    res.status(200).json( movies );
  };

  if (req.session.uid) {
    Movie.find({}, callback);
  } else {
    Movie.find({}, {meta: 0}, callback);
  }
};

exports.viewMovie = function (req, res, next) {
  Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if ( err ) { return send404(res, err); }

    res.status(200).json( movie );
  });
};

exports.createMovie = function (req, res, next) {
  Movie.create(req.body, (err, movie) => {
    if ( err ) { return send404(res, err); }

    res.status(201).json( movie );
  });
};

exports.updateMovie = function (req, res, next) {
  Movie.update(
    { _id: req.param.id },
    req.body,
    { multi: false },
    (err, movie) => {
      if ( err ) { return send404(res, err); }

      res.status(201).json( movie );
    }
  );
};

exports.deleteMovie = function (req, res, next) {
  Movie.remove({ _id: req.param.id }, (err, movie) => {
    if ( err ) { return send404(res, err); }

    res.status(204).json( movie );
  });
};