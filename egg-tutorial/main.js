var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {
  // Creates $route to be used in controller
  $routeProvider
    .when('/',
      {
        templateUrl: "app.html",
        controller: "AppCtrl"
      })
    .when('/pizza',
      {
        template: 'Yum!'
      })
    .otherwise({
      template: 'Does not exist!'
    })
})

myApp.controller("AppCtrl", function ($scope, $route) {
  $scope.model = {
    message: "this is my message"
  }
})