    requirejs.config({
            baseurl : "",
            waitSeconds : 15,
            deps : ["app"],
            paths :{
                'jquery' : "jquery/dist/jquery",
                'angular' : "angular/angular",
                'app' : "scripts/js/app",
                'uirouter' : "angular-ui-router/build/angular-ui-router",
                'bootstrap' : "bootstrap/dist/js/bootstrap"
            },
            shim : {
                'angular' : ["jquery"],
                'uirouter' : ["angular"]
            }
        }
    );


