angular.module("assetsModule",['ui.router'])
    .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise("/assets");
        $stateProvider
            .state("assets",{
                url : "/assets",
                templateUrl : "scripts/templates/assetsList.html",
                controller : "assetsController"
            }).state("asset.details",{
                url : "/:id",
                templateUrl : "scripts/templates/assetDetails.html",
                controller : "assetsController"
            })
    }])
    .constant("assetsUrl","http://localhost:3000/api/assets")
    .controller('assetsController',['$scope','assets.service',function($scope, assetsService){
        $scope.assets = [];
        $scope.currentAsset = {};
        assetsService.getAssets().then(function(result){
            $scope.assets = result.data;
        },function(err){
            console.log("error occured fetching assets..!" + err)
        });
    }])
    .factory('assets.service',['$http','$q','assetsUrl', function($http,$q,assetsUrl){
        var getAssets = function() {
            var request = $http.get(assetsUrl);
            return request;
        };
        return {getAssets : getAssets}
    }]);

