var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {
  $routeProvider
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
      redirectTo: '/'
    })
})

myApp.controller("AppCtrl", function ($scope, $routeParams) {
  // loads from q library; handles promises
  var defer = $q.promise

  defer.promise
    .then(function (value) {
      alert("hello " + value)

      return "biz"
    })
    .then(function (value) {
      alert("what's up " + value)
    })

  defer.resolve("world")

  $scope.model = {
    message: "Location is " + $routeParams.city + ", " + $routeParams.state + ", " + $routeParams.country
  }
})