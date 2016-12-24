module.exports = function ($scope, $http, movieListPageCount) {
  $scope.pageSize = movieListPageCount;

  $scope.typeFilter = function ( movie ) {
    var type = null;

    if ( $scope.movie ) {
      type = $scope.movie.type;
    }

    const rege = new RegExp(type, 'i');

    return type === null || movie.type.match( rege );
  };
};