sherrisGardenApp.controller('IndexController',  ['$scope', '$http', '$window','GardenService',function($scope, $http, $window, GardenService) {
  $scope.toGardenView = function(){
    $window.location.href = '#garden';
  };
  $scope.toExtraView = function(){
    $window.location.href = '#extra';
  };

}]);

sherrisGardenApp.controller('GardenController',  ['$scope', '$http', '$window','GardenService',function($scope, $http, $window, GardenService) {


}]);

sherrisGardenApp.controller('ExtraController',  ['$scope', '$http', '$window','GardenService',function($scope, $http, $window, GardenService) {


}]);
