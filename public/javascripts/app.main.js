const angular = require('angular');

require('angular-route');

const app = angular.module('movieApp', ['ngRoute']);

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enable: true,
    requireBase: false
  });
});

require('./app/movies/router');
require('./app/movies/controllers');
require('./app/movies/filters');