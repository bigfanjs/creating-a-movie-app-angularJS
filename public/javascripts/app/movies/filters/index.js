const movieApp = require('angular').module('movieApp');

movieApp.filter('uniq', require('./uniq'));