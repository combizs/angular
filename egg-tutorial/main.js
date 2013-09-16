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
      controller: 'viewCtrl'
    })
    .otherwise({
      redirectTo: '/',
      template: 'hello',
      resolve: {
        loadData: viewCtrl.loadData
      }
    })
})

myApp.controller("AppCtrl", function ($routeScope) {
  $routeScope.$on("$routeChangeError", function () {
    console.log("did not load page!")
  })
})

var viewCtrl = myApp.controller("viewCtrl", function ($scope, $routeParams) {
  $scope.model = {
    message: "I am a great app!"
  }
})

viewCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.reject();
  }, 2000);
  return defer.promise;
}