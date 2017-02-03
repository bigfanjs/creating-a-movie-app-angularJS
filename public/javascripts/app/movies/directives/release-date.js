module.exports = function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link(scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$formatters.push(modelValue => {
        if (typeof modelValue === 'undefined') {
          return '';
        }

        return new Date(modelValue).toLocaleDateString();
      });

      ngModelCtrl.$parsers.push(viewValue => {
        return new Date(viewValue);
      });
    }
  };
};