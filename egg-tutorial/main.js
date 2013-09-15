var myApp = angular.module('myApp', []);

myApp.directive("zippy", function ($templateCache) {
  console.log($templateCache.get("zippy"));
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    // templateUrl: $templateCache.get("zippy.html"),
    templateUrl: 'zippy.html',
    link: function (scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
});