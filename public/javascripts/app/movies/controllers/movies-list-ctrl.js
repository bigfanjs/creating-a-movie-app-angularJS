module.exports = function ($scope, $http, movieListPageCount) {
  $scope.pageSize = movieListPageCount;

  $scope.genreFilter = function ( movie ) {
    var genre = null;

    if ( $scope.genre ) {
      genre = $scope.genre;
    }

    const rege = new RegExp(genre, 'i');

    return genre === null || movie.genre.match( rege );
  };

  $scope.releaseYearFilter = function (movie) {
    var
      releaseYear = null,
      regexp;

    if ($scope.releaseYear) {
      releaseYear = $scope.releaseYear;
      regexp = new RegExp(releaseYear, 'i');
    }

    return releaseYear === null ||
      movie.releaseDate.year.match( regexp );
  };
};