module.exports = function ($scope, $http, $window) {
  $scope.login = function (username, password) {
    $http.post(
      '/admin/login',
      { username, password },
      { withCredentials: true }
    ).success(data => {
      $window.location.href = data.redirect;
    }).error(err => {
      $scope.authErr = err;
    });
  };
};