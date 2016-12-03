'use strict';

const
  env = process.env.NODE_ENV || 'dev',
  config = require('./config.' + env);

module.exports = config;