module.exports = function ($scope, $http, $location, $routeParams, Movie, adminPageCount) {
  $scope.params = {};
  $scope.pageSize = adminPageCount;
  $scope.movies = Movie.query({page: $routeParams.page});

  $scope.lookUp = function ( title ) {
    $scope.movies = Movie.query({ title });
  };

  $scope.filter = function (filters) {
    $scope.movies = Movie.query(filters);
  };

  $scope.clear = function () {
    $scope.params = {};
  };

  $scope.createMovie = function () {
    $location.path('/movies/new');
  };

  $scope.editMovie = function (id) {
    $location.path('/movies/edit/'+id);
  };

  $scope.deleteMovie = function (id) {
    Movie.delete({ id }, function (removed) {
      $scope.movies.splice($scope.movies.indexOf(removed), 1);
    });
  };
};