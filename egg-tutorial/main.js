var myApp = angular.module('superApp', []);

myApp.directive("superhero", function () {
  return {
    restrict: "E",
    scope: {},

    controller: function ($scope) {
      $scope.abilities = [];

      this.addStrength = function () {
        $scope.abilities.push("strength")
      }
      this.addSpeed = function () {
        $scope.abilities.push("speed")
      }
      this.addFlight = function () {
        $scope.abilities.push("flight")
      }
    },

    link: function (scope, element) {
      element.addClass("button");
      element.bind("click", function () {
        console.log(scope.abilities);
      })
    }
  }
});

myApp.directive("strength", function () {
  return {
    require: "superhero",
    link: function (scope, element, attrs, superheroCtrl) {
      superheroCtrl.addStrength();
    }
  }
});

myApp.directive("flight", function () {
  return {
    require: "superhero",
    link: function (scope, element, attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  }
});

myApp.directive("speed", function () {
  return {
    require: "superhero",
    link: function (scope, element, attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  }
});