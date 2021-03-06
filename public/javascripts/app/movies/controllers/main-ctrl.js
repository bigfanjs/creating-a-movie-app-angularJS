module.exports = function ($scope) {
  $scope.selectedPage = 1;
  $scope.movie = { title: null };

  $scope.titleFilter = function ( movie ) {
    const
      title = $scope.movie.title,
      rege = new RegExp(title, 'i');

    return title === null || (movie.title || '').match( rege );
  };

  $scope.selectPage = function ( page ) {
    $scope.selectedPage = page;
  };

  $scope.getPageClass = function ( page ) {
    return $scope.selectedPage == page ? 'btn-primary' : '';
  };
};