'use strict';

const
  mongoose = require('mongoose'),
  db = mongoose.connect('');

const
  movie = require('./movie')(mongoose, db),
  admin = require('./admin')(mongoose, db);

const models = { movie, admin };

module.exports = function ( model ) {
  return models[ model ];
};