const movieApp = require('angular').module('movieApp');

movieApp.filter('uniq', require('./uniq'));
movieApp.filter('range', require('./range'));
movieApp.filter('pageCount', require('./page-count'));