module.exports = function ($http, $q) {
  return {
    login: function (username, password) {
      const dfd = $q.defer();

      $http
        .post('/admin/login', {username, password})
        .then(
          data => {
            if (data.status === 200) {
              dfd.resolve();
            } else {
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