module.exports = function ($scope, $http, adminPageCount) {
  $scope.filters = {};

  $scope.pageSize = adminPageCount;

  $scope.timeFilter = function ( movie ) {
    const
      time = $scope.filters.time,
      dateAdded = new Date().getTime() - movie.dateAdded;

    return time === null || time >= dateAdded;
  };

  $scope.filter = function ( filters ) {
    $scope.result = 10;
  };
};