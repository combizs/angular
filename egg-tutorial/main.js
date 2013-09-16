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
      template: 'Deep Dish',
      controller: 'AppCtrl'
    })
    .otherwise({
      redirectTo: '/',
      template: 'hello',
      resolve: {
        loadData: appCtrl.loadData
      }
    })
})

var appCtrl = myApp.controller("AppCtrl", function ($scope, $routeParams) {
  $scope.model = {
    message: "I am a great app!"
  }
})

appCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve();
  }, 2000);
  return defer.promise;
}