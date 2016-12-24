module.exports = function ($scope, $http) {
  $scope.pageSize = adminCount;

  $scope.timeFilter = function ( movie ) {
    const
      time = filters.filters.time,
      dateAdded = new Date().getTime() - movie.dateAdded;

    return time === null || time >= dateAdded;
  };

  $scope.filter = function ( filters ) {
    $scope.result = 10;
  };
};