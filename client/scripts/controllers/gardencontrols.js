sherrisGardenApp.controller('IndexController',  ['$scope', '$http', '$window','GardenService',function($scope, $http, $window, GardenService) {
  $scope.toGardenView = function(){
    $window.location.href = '#garden';
  };
  $scope.toExtraView = function(){
    $window.location.href = '#extra';
  };
}]);

sherrisGardenApp.controller('GardenController',  ['$scope', '$http', '$window','GardenService', '$mdDialog', function($scope, $http, $window, GardenService, $mdDialog) {
  $scope.gardenCreated = null;
  var checkIfThereIsData = function(){
        $http.get('/checkDB').then(function(response){
            var bool = response.data;
            if(bool === false){
             $scope.gardenCreated = false;
           }else{
             $scope.gardenCreated = true;
           }
        });
  };
  checkIfThereIsData();
  // createNewGarden = function(){
  //   return console.log("Create New Garden pop up!");
  // };
  // $scope.createNewGarden = createNewGarden();

  createNewGarden = function(id) {
    var confirm = $mdDialog.confirm()
          .title('This is a test dialog box.')
          .ok('Yes')
          .cancel('No');
    $mdDialog.show(confirm).then(function() {
      console.log("Yes");
      // GardenService.plantAGarden();
      // $scope.getGarden();
    }, function() {
      console.log("No");
    });
  };
  $scope.createNewGarden = createNewGarden();

}]);

sherrisGardenApp.controller('ExtraController',  ['$scope', '$http', '$window','GardenService',function($scope, $http, $window, GardenService) {


}]);
