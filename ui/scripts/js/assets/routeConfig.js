define([], function(){
    "use strict";
    function routeConfig($urlRouterProvider, $stateProvider){
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
            });
    }
    routeConfig.$inject = ['$urlRouterProvider','$stateProvider'];
    return routeConfig;
});