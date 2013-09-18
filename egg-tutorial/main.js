var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvide) {
  $routeProvide
    .when('/',
    {
      templateUrl: 'app.html',
      controller: 'ViewCtrl',
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

var viewCtrl = myApp.controller("ViewCtrl", function ($scope, $route) {
  console.log($route);
  $scope.model = {
    message: "I am a great app!"
  }
})

viewCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve();
  }, 2000);
  return defer.promise;
}