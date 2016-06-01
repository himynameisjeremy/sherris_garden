sherrisGardenApp.factory("GardenService", ["$http", function($http){

  // var gardenCreated = true;

  // var checkIfThereIsData = function(){
  //       $http.get('/checkDB').then(function(response){
  //           var bool = response.data;
  //           if(bool === false){
  //            gardenCreated = false;
  //           }
  //       });
  //   };
  //   checkIfThereIsData();

    return {
      // gardenCreated: gardenCreated
    };
}]);
