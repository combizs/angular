var myApp = angular.module('behaviorApp', []);

myApp.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function (){
      element.addClass(attrs.enter)
    })
  }
});

myApp.directive("leave", function () {
  return function (scope, element, attrs) {
    element.bind("mouseout", function (){
      element.removeClass(attrs.enter)
    })
  }
});
