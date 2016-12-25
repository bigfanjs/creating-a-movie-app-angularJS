module.exports = function ($http, $q) {
  return {
    isAuth: false,
    login: function (username, password) {
      const dfd = $q.defer();

      $http
        .post('/admin/login', {username, password})
        .then(
          data => {
            if (data.status === 200) {
              this.isAuth = true;
              dfd.resolve();
            } else {
              this.isAuth = false;
              dfd.reject();
            }
          },
          function ( err ) {
            dfd.reject( err );
          }
        );

      return dfd.promise;
    },
    logout: function () {
      const dfd = $.defer();

      $http
        .get('/admin/logout')
        .then(
          (data, status) => {
            if (status == 200) {
              dfd.resolve();
              this.isAuth = false;
            } 
          },
          function (err, status) {
            dfd.reject( err );
          }
        );

      return dfd.promise;
    }
  };
};