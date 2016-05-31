var sherrisGardenApp = angular.module("sherrisGardenApp", ['ngMaterial', 'ngRoute']);

sherrisGardenApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider.
        when("/index", {
            templateUrl: "/views/index.html",
            controller: "IndexController"
        }).
        when("/garden", {
            templateUrl: "/views/gardenViews/gardenView.html",
            controller: "GardenController"
        }).
        when("/extra", {
            templateUrl: "/views/gardenViews/extraView.html",
            controller: "ExtraController"
        }).
        otherwise({
            redirectTo: '/garden'
        });
}]);
