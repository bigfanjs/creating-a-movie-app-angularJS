'use strict';

const
  mongoose = require('mongoose'),
  config = require('../config/'),
  db = mongoose.connect(config.database.uri);

const
  movie = require('./movie')(mongoose, db),
  admin = require('./admin')(mongoose, db);

const models = { movie, admin };

module.exports = function ( model ) {
  return models[ model ];
};