module.exports = function ($scope, $http) {
  $scope.pageSize = adminCount;

  $scope.filters = {};

  $http.get('/admin/movies').then(res => {
    $scope.data.movies = res.data;
  });

  $scope.lookup = function () {

  };

  $scope.filter = function ( filters ) {
    
  };
};