var myApp = angular.module('superhero', []);

myApp.directive("superman", function () {
  return {
    restrict: "C",
    link: function (){
      alert("I'm working");
    }
  }
});
