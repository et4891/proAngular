/**
 * Created by et-asus on 29/06/16.
 */
var app = angular.module("exampleApp", []);

app.controller("topLevelCtrl", function ($scope) {
    $scope.dataValue = "Hello, Adam";

    //reverse the texts
    $scope.reverseText = function (){
        $scope.dataValue = $scope.dataValue.split("").reverse().join("");
    };

    //change the cases to lower, upper, lower upper and so on. e.g. the output would be "hElLo, AdAm"
    $scope.changeCase = function () {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function(char, index){
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        
        $scope.dataValue = result.join("");
    }
});

/*
* In HTML this controller is nested within the topLevelCtrl which causes this controller to inherit the reverseText()
* Also, able to override the changeCase() from topLevelCtrl */
app.controller("firstChildCtrl", function ($scope) {
    //change all case to upper
    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toUpperCase();
    }
});

/*
* Other than being able to inherit the functions from topLevelCtrl but also able to create own function / data since the child has its own scope too
* Created shiftFour() which is not in the topLevelCtrl and so this behavior only belong to this secondChildCtrl */
app.controller("secondChildCtrl", function ($scope) {
    //change all case to lower
    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toLowerCase();
    };

    //the first four characters will be upper and the rest stays as is
    $scope.shiftFour = function () {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function (char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.dataValue = result.join("");
    }
});

