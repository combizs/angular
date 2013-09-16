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
    .when('/pizza/:crust/:topping',
      {
        redirectTo: function (routeParams, path, search) {
          console.log(routeParams)
          console.log(path)
          console.log(search)
          return "/" + routeParams.crust
        }
      })
    .when('/deep',
    {
      template: 'Deep Dish'
    })
    .otherwise({
      // template: 'Does not exist!',
      redirectTo: '/'
    })
})

myApp.controller("AppCtrl", function ($scope, $routeParams) {
  $scope.model = {
    message: "Location is " + $routeParams.city + ", " + $routeParams.state + ", " + $routeParams.country
  }
})