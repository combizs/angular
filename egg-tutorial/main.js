var myApp = angular.module('myApp', []);

myApp.directive("dumbPassword", function () {
  return {
    restrict: "E",
    replace: true,
    template: "<div><input type=\"text\" ng-model=\"model.input\"><div>{{model.input}}</div></div>",
    link: function (scope) {
      scope.$watch("model.input", function (value) {
        if (value == "password") {
          console.log("Change it!");
        }
      })
    }
  }
});