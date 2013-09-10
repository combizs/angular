var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
  return { message : "I'm from the future!" }
})

myApp.filter('reverse', function () {
  return function () {
    return "";
  }
})

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reverseString = function (message) {
    return message.split("").reverse().join("");
  }
}