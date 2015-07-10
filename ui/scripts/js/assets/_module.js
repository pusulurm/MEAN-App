require(['angular',
        'scripts/js/assets/constant',
        'scripts/js/assets/routeConfig',
        'scripts/js/assets/service',
        'scripts/js/assets/controller',
        'uirouter'],
    function(angular, assetConstant, assetConfig, assetService, assetContoller)
    {
            angular.module("assetsModule",["ui.router"])
                .constant("assets.constants", assetConstant)
                .config(assetConfig)
                .factory("assets.service", assetService)
                .controller("assetsController", assetContoller)
                .run(function(){
                    console.log("module is ready...!");
                });
            angular.bootstrap(document, ['assetsModule']);
    }
);