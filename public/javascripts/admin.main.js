const angular = require('angular');

require('angular-route');

const app = angular.module('admin', ['ngRoute']);

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

require('./app/admin-login/router');
require('./app/admin-login/controllers');