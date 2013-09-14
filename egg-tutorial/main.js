var myApp = angular.module('myApp', []);

myApp.directive("dumbPassword", function () {
  return {
    retrict: "E",
    template: "<div><input type=\"text\" ng-model=\"model.input\"><div>{{model.input}}</div></div>"
  }
});