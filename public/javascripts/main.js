const angular = require('angular');

const baseUrl = '/javascripts/app/';

require('angular-route');

const app = angular.module('movieApp', ['ngRoute']);

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.config($routeProvider => {
  $routeProvider.when('/movies', {
    templateUrl: baseUrl + 'movies/views/movies-list.html'
  });

  $routeProvider.when('/movies/view/:id', {
    templateUrl: baseUrl + 'movies/views/movie-view.html'
  });

  $routeProvider.when('/admin', {
    resolveRedirectTo: function ($q, authService) {
      if (authService.isAuth) {
        return '/admin/dashboard';
      } else {
        return '/admin/login';
      }
    }
  });

  $routeProvider.when('/admin/login', {
    templateUrl: baseUrl + 'admin-login/views/login-form.html',
    controller: 'loginCtrl'
  });

  // $routeProvider.when('/admin/dashboard', {
  //   templateUrl: baseUrl + 'admin/login/views/dashboard.html',
  //   controller: 'adminCtrl'
  // });
});

require('./app/admin-login/services');
require('./app/admin-login/controllers');

require('./app/movies/controllers');
require('./app/movies/filters');