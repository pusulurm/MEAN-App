define([],function(){
    "use strict";
    function assetsService($http, assetsConstant){
        var getAssets = function() {
            var request = $http.get(assetsConstant.assetsUrl);
            return request;
        };
        return {
            getAssets : getAssets
        };
    }
    assetsService.$inject = ['$http', 'assets.constants'];
    return assetsService;
});