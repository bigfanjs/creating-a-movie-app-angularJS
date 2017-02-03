module.exports = function ($scope, $routeParams, Movie) {
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

  $scope.movie = Movie.get({id: $routeParams.id});

  $scope.fieldFilter = function ( key ) {
    return fields.includes( key );
  };
};