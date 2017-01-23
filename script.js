/**
 * Created by Sheeba on 1/20/2017.
 */
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: 'myController'
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: 'studentController'
        })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: 'contactController'
        });

});
app.controller('myController', function($scope) {
    $scope.message = "This is homepage";
});
app.controller('studentController', function($scope) {
    $scope.message = "This is about page";
});
app.controller('contactController', function($scope) {
    $scope.message = "This is contact page";
});


app.controller('studentController', function($scope, $http) {
    $http.get("\studentData.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});