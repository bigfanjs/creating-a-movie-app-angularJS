const angular = require('angular');

const baseUrl = '/javascripts/app/';

require('angular-route');
require('angular-resource');

const app = angular.module('movieApp', ['ngRoute', 'ngResource']);

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.config($routeProvider => {
  $routeProvider.when('/movies', {
    templateUrl: baseUrl + 'movies/views/movies-list.html',
    access: {restrected: false}
  });

  $routeProvider.when('/movies/view/:id', {
    templateUrl: baseUrl + 'movies/views/movie-item.html',
    access: {restrected: false}
  });

  $routeProvider.when('/movies/edit/:id', {
    templateUrl: baseUrl + 'movies/views/movie-form.html',
    access: {restrected: true}
  });

  $routeProvider.when('/movies/new', {
    templateUrl: baseUrl + 'movies/views/movie-form.html',
    access: {restrected: true}
  });

  $routeProvider.when('/admin', {
    redirectTo: '/admin/dashboard',
    access: {restrected: true}
  });

  $routeProvider.when('/admin/login', {
    templateUrl: baseUrl + 'admin-login/views/login-form.html',
    controller: 'loginCtrl',
    access: {restrected: false}
  });

  $routeProvider.when('/admin/dashboard', {
    templateUrl: baseUrl + 'movies/views/dashboard.html',
    controller: 'adminCtrl',
    access: {restrected: true}
  });

  $routeProvider.otherwise({
    redirectTo: '/movies',
    access: {restrected: false}
  });
});

app.run(($rootScope, $location, $route, authService) => {
  $rootScope.$on('$routeChangeStart', function (ev, next) {
    if (next.access.restrected) {
      authService
        .conformLogin()
        .then(null,
          function () {
            $location.path('/admin/login');
          }
        );
    }
  });
});

require('./app/admin-login/services');
require('./app/admin-login/controllers');

require('./app/movies/controllers');
require('./app/movies/filters');
require('./app/movies/directives');
require('./app/movies/services');