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
  var northToSouth = null;
  var eastToWest = null;

  var checkIfThereIsData = function(){
        $http.get('/checkDB').then(function(response){
            var bool = response.data;
            if(bool === false){
             $scope.gardenCreated = false;
             createNewGarden();
           }else{
             $scope.gardenCreated = true;
             console.log("Garden already created");
           }
        });
  };
  checkIfThereIsData();


  createNewGarden = function() {
    var confirm = $mdDialog.confirm()
          .title('Would you like to create your garden?')
          .ok('Yes')
          .cancel('No');
    $mdDialog.show(confirm).then(function() {
      console.log("Yes");
      createNewGarden2();
    }, function() {
      console.log("No");
    });
  };
  createNewGarden2 = function() {
    var confirm = $mdDialog.prompt()
          //TODO Figure out better wording for these!
          .title('How many plants go North/South in your garden?')
          .textContent('IMPORTANT: Use the row with highest amount of plants.')
          .placeholder('Number of rows going North to South.')
          .ariaLabel('Rows North to South')
          .targetEvent()
          .ok('Submit')
          .cancel('Restart')
    $mdDialog.show(confirm).then(function(result) {
      northToSouth = result;
      $scope.rowsNtoS = northToSouth;
      console.log($scope.rowsNtoS);
      createNewGarden3();
    }, function() {
      console.log('Insert option to restart here.');
      //TODO Will redirect to start of process again.
      createNewGarden();
    });
  };
  createNewGarden3 = function() {
    var confirm = $mdDialog.prompt()
          //TODO Figure out better wording for these!
          .title('How many plants go East/West in your garden?')
          .textContent('IMPORTANT: Use the row with highest amount of plants.')
          .placeholder('Number of rows going East to West.')
          .ariaLabel('Rows East to West')
          .targetEvent()
          .ok('Submit')
          .cancel('Restart')
    $mdDialog.show(confirm).then(function(result) {
      eastToWest = result;
      $scope.rowsEtoW = eastToWest;
      console.log($scope.rowsEtoW);
      createNewGarden4();
    }, function() {
      console.log('Insert option to restart here.');
      //TODO Will redirect to start of process again.
      createNewGarden();
    });
  };

  createNewGarden4 = function() {
    var confirm = $mdDialog.confirm()
          .title('Confirm the following information:')
          .textContent("Rows in garden North to South: " + $scope.rowsNtoS + " & Rows in garden East to West: " + $scope.rowsEtoW)
          .ok('Yes')
          .cancel('No')
    $mdDialog.show(confirm).then(function() {
      console.log("Yes");
      var setGardenSize = {
        rowsNtoS : $scope.rowsNtoS,
        rowsEtoW : $scope.rowsEtoW
      };
      createNewGardenInDB(setGardenSize);
    }, function() {
      console.log("No");
      createNewGarden();
    });
  };

  createNewGardenInDB = function(gardenSize){
    console.log("Getting late so will be putting a Post here to make DB.");
    $http.post('/garden', gardenSize).then(function(response){
      console.log(gardenSize);
      makeGarden();
    });
  };

  makeGarden = function(){
    console.log("This will calculate tiles on screen");
  };
}]);

sherrisGardenApp.controller('ExtraController',  ['$scope', '$http', '$window','GardenService',function($scope, $http, $window, GardenService) {


}]);
