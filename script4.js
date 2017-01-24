/**
 * Created by Sheeba on 1/23/2017.
 */
var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {
    $http.get("\ teachersData.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});