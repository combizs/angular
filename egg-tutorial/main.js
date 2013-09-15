var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {
  // Creates $route to be used in controller
  $routeProvider
  // not a typical scenerio
    .when('/:message',
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

myApp.controller("AppCtrl", function ($scope, $routeParams) {
  $scope.model = {
    message: $routeParams.message
  }
})