var myApp = angular.module('superhero', []);

myApp.directive("superman", function () {
  return {
    restrict: "E",
    template: "<div>Welcome</div>"
  }
});
