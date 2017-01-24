/**
 * Created by Sheeba on 1/21/2017.
 */
var app = angular.module('myApp', []);
app.controller('studentController', function($scope, $http) {
    $http.get("\studentData.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});

