'use strict';

const Movie = require('../models')('movie');

exports.listMovies = function (req, res, next) {
  Movie.find({}, (err, movies) => {
    if ( err ) return next( err );

    res.json( movies );
  });
};

exports.viewMovie = function (req, res, next) {
  Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if ( err ) return next( err );

    res.json( movie );
  });
};

exports.createMovie = function (req, res, next) {
  Movie.create(req.body, (err, movie) => {
    if ( err ) return next();

    res.json( movie );
  });
};

exports.updateMovies = function (req, res, next) {
  Movie.update(
    { _id: req.param.id },
    req.body,
    { multi: false },
    (err, movie) => {
    if ( err ) return next( err );

    res.json( movie );
  });
};

exports.deleteMovie = function (req, res, next) {
  Movie.remove({ _id: req.param.id }, (err, movie) => {
    if ( err ) return next( err );

    res.json( movie );
  });
};