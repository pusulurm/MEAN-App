    requirejs.config({
            baseurl : "",
            waitSeconds : 15,
            deps : ["mainModule"],
            paths :{
                'jquery' : "jquery/dist/jquery",
                'angular' : "angular/angular",
                'mainModule' : "scripts/js/assets/_module",
                'uirouter' : "angular-ui-router/build/angular-ui-router",
                'bootstrap' : "bootstrap/dist/js/bootstrap"
            },
            shim : {
                'angular' : {
                    "exports": "angular",
                    "deps": ["jquery"]
                },
                'uirouter' : {
                    "exports": "uirouter",
                    "deps": ["angular"]
                }
            }
        }
    );


