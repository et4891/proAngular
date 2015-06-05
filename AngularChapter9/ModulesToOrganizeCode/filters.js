/**
 * Created by ET on 6/3/2015.
 */
//Created a module called exampleApp.Filters and used it to create the filter that was part of the main module in earlier examples.
//For variety, I have used the fluent API to call the filter method directly on the result of the module method
angular.module("exampleApp.Filters", []).filter("dayName", function(){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return function (input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
});