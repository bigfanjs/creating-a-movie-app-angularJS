const angular = require('angular');

const baseUrl = '/javascripts/app/movies/views/';

require('angular-route');

const app = angular.module('movieApp', ['ng-route']);

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.config($routeProvider => {
  $routeProvider.when('/movies', {
    templateUrl: baseUrl + 'movies-list.html',
    controller: 'moviesCtrl'
  });

  $routeProvider.when('/movies/view/:id', {
    templateUrl: baseUrl + 'movie-view.html'
  });

  $routeProvider.when('/admin', {
    resolveRedirectTo: function ($q, authService) {
      if (authService.isAuthenticated()) {
        return '/admin/movies';
      } else {
        return '/admin/login';
      }
    }
  });

  $routeProvider.when('/admin/login', {
    templateUrl: baseUrl + 'login-form.html',
    controller: 'loginCtrl'
  });

  $routeProvider.when('/admin/movies', {
    templateUrl: baseUrl + 'admin-movies.html',
    controller: 'adminCtrl'
  });

  $routeProvider.when('/admin/movies/view/:id', {
    templateUrl: 'admin-movie-view.html',
    controller: 'adminCtrl'
  });
});

require('./app/movies/services');