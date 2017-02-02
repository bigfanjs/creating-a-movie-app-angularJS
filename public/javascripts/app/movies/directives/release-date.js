module.exports = function () {
  return {
    restrict: 'A',
    require: '^ngModel',
    link(scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$formaters.push(modelValue => {
        return modelValue.toLocalDateString();
      });

      ngModelCtrl.$parsers.push(viewValue => {
        return new Date(viewValue);
      });
    }
  };
};