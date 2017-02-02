module.exports = function ($scope, $routeParams) {
  const id = $routeParams.id;

  const fields = [
    'genre',
    'runningTime',
    'director',
    'boxOffice',
    'budget',
    'country',
    'language',
    'releaseDate'
  ];

  $scope.movie = $scope.movies.find(movie => {
    return movie._id === id;
  });

  $scope.fieldFilter = function ( key ) {
    return fields.includes( key );
  };
};