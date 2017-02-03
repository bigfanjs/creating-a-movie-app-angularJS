module.exports = function ($scope, $http, $location, Movie, adminPageCount) {
  $scope.filters = {};

  $scope.pageSize = adminPageCount;

  $scope.movies = Movie.query();

  $scope.timeFilter = function ( movie ) {
    const
      time = $scope.filters.time,
      dateAdded = new Date().getTime() - movie.dateAdded;

    return time === null || time >= dateAdded;
  };

  $scope.filter = function ( filters ) {
    $scope.result = 10;
  };

  $scope.createMovie = function () {
    $location.path('/movies/new');
  };

  $scope.editMovie = function (id) {
    $location.path('/movies/edit/'+id);
  };

  $scope.deleteMovie = function (id) {

  };
};