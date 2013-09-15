var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {
  // Creates $route to be used in controller
  $routeProvider
  // not a typical scenerio
    .when('/map/:country/:state/:city',
      {
        templateUrl: "app.html",
        controller: "AppCtrl",
        message: "default"
      })
    .otherwise({
      template: 'Does not exist!'
    })
})

myApp.controller("AppCtrl", function ($scope, $routeParams) {
  $scope.model = {
    message: "Location is " + $routeParams.city + ", " + $routeParams.state + ", " + $routeParams.country
  }
})