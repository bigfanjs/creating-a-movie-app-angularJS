module.exports = function ($http) {
  return {
    uploadFile(type, file, url) {
      const form = new FormData();

      if (Array.isArray(file)) {
        let files = file;
        file = null;

        files.forEach(file => {
          form.append(type, file);
        });
      } else {
        form.append(type, file);
      }

      $http.post(url, form, {
        headers: {'Content-Type': undefined}
      });
    }
  };
};