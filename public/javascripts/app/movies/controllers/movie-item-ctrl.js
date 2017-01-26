module.exports = function ($scope, $routeParams) {
  const id = $routeParams.id;

  $scope.movie = $scope.data.movies.find(movie => {
    return movie._id === id;
  });
};