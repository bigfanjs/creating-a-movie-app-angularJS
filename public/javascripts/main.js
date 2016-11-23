const angular = require('angular');

require('angular-route');

const app = angular.module('movieApp', ['ngRoute']);

require('./app/movies/router');
require('./app/movies/controllers');
require('./app/movies/filters');