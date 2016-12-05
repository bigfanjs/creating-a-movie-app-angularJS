const angular = require('angular');

require('angular-route');

const app = angular.module('admin', ['ngRoute']);

require('./app/admin-login/router');
require('./app/admin-login/controllers');