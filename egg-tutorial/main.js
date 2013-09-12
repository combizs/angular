var myApp = angular.module('myApp', []);

myApp.directive("zippy", function () {
  return {
    restrict: "E",
    template: "<div>Hello World!</div>"
  }
});