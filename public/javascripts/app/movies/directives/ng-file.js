module.exports = function ($parse) {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      const
        model = $parse(attrs.ngFile),
        setter = model.assign,
        onChange = $parse(attrs.onChange);

      element.bind('change', function ( e ) {
        const file = element[0].files[0];

        scope.$apply(function () {
          setter(scope, file);
          onChange(Object.assign(scope, {e}));
        });
      });
    }
  };
};