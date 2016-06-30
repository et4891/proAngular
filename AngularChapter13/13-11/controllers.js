/**
 * Created by et-asus on 29/06/16.
 */
var app = angular.module("exampleApp", []);

app.controller("topLevelCtrl", function ($scope) {
    //Using an object as an intermediary
    //This ensures that ng-model will update the data values defined in the parent scope.
    $scope.data = {
        dataValue: "Hello, Adam"
    };

    //reverse the texts
    $scope.reverseText = function (){
        $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
    };

    //change the cases to lower, upper, lower upper and so on. e.g. the output would be "hElLo, AdAm"
    $scope.changeCase = function () {
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function(char, index){
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        
        $scope.data.dataValue = result.join("");
    }
});

app.controller("firstChildCtrl", function ($scope) {
    //change all case to upper
    $scope.changeCase = function () {
        $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
    }
});

app.controller("secondChildCtrl", function ($scope) {
    //change all case to lower
    $scope.changeCase = function () {
        $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
    };

    //the first four characters will be upper and the rest stays as is
    $scope.shiftFour = function () {
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function (char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.data.dataValue = result.join("");
    }
});

