const app = require('angular').module('movieApp');

angular.module('movieApp')
  .config($routeProvider => {
    $routeProvider.when('/movies', {
      templateUrl: '/javascripts/app/movies/views/movies-list.html'
    });

    $routeProvider.when('/movies/view', {
      templateUrl: '/javascripts/app/movies/views/movies-viewer.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/movies'
    });
  });