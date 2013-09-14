var myApp = angular.module('myApp', []);

myApp.directive("dumbPassword", function () {

  // create cache of element in template; similar to jQuery since we can't use .find()
  var validElement = angular.element("<div>{{model.input}}</div>");

  return {
    restrict: "E",
    replace: true,
    template: "<div><input type=\"text\" ng-model=\"model.input\"></div>",
    compile: function (tElem) {
      tElem.append(validElement);
    },
    link: function (scope, element) {
      scope.$watch("model.input", function (value) {
        if (value == "password") {
          console.log("Change it!");
          element.children(1).toggleClass("alert-box alert");
        }
      })
    }
  }
});