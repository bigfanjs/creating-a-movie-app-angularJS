module.exports = function ($http, $q) {
  var user = null;

  return {
    isAuth: function () {
      if ( user ) {
        return true;
      } else {
        return false;
      }
    },
    conformLogin: function () {
      const dfd = $q.defer();

      $http
        .get('/session')
        .then(
          data => {
            console.log('Fuck!!!', data.status);
            if (data.status === 200) {
              user = true;
              dfd.resolve(data);
            } else {
              user = false;
              dfd.reject();
            }
          },
          err => {
            console.log('Naaari yawald l9a7ba!', err);
            user = false;
            dfd.reject();
          }
        );

      return dfd.promise;
    },
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
          data => {
            if (data.status == 200) {
              dfd.resolve();
            } 
          },
          err => {
            dfd.reject( err );
          }
        );

      return dfd.promise;
    }
  };
};