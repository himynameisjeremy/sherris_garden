var sherrisGardenApp = angular.module("sherrisGardenApp", ['ngMaterial', 'ngRoute'])

.config(["$mdThemingProvider", "$routeProvider", "$locationProvider", function($mdThemingProvider, $routeProvider, $locationProvider){

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');

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
