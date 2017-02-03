const movieApp = require('angular').module('movieApp');

movieApp.factory('fileUpload', require('./file-upload'));
movieApp.factory('Movie', require('./movie'));