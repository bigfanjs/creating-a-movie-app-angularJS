const movieApp = require('angular').module('movieApp');

movieApp.directive('ngFile', require('./ng-file'));
movieApp.directive('releaseDate', require('./release-date'));