var myApp = angular.module('twitterApp', []);

myApp.controller("AppCtrl", function ($scope) {
  $scope.loadmoreTweets = function () {
    alert("loading");
  }
})

myApp.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function (){
      // scope.apply("loadmoreTweets()")
      console.log("ENTER");
    })
  }
});

// myApp.directive("leave", function () {
//   return function (scope, element, attrs) {
//     element.bind("mouseout", function (){
//       element.removeClass(attrs.enter)
//     })
//   }
// });
