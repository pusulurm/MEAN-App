define([],function(){
    "use strict";
    function assetsController($scope, assetsService){
        $scope.assets = [];
        $scope.currentAsset = {};
        assetsService.getAssets().then(function(result){
            $scope.assets = result.data;
        },function(err){
            console.log("error occured fetching assets..!" + err)
        });
    }
    assetsController.$inject = ['$scope','assets.service'];
    return assetsController;
});