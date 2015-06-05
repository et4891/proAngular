/**
 * Created by ET on 6/3/2015.
 */

// A module named exampleApp.Controllers is created and used to define the two controllers
var controllersModule = angular.module("exampleApp.Controllers", [])

controllersModule.controller("dayCtrl", function($scope, days){
   $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function($scope, days){
    $scope.day = days.tomorrow;
});