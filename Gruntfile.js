module.exports = function(grunt){

    var config = {
        pkg : grunt.file.readJSON("package.json"),
        src: {
            js: ['ui/scripts/js/*.js'],
            templates: ['ui/index.html','ui/scripts/templates/*.html']
        },
        express: {
            api: {
                options: {
                    port: 3001,
                    server: "ui/server.js"
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:3001/'
            }
        }
    };

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['express:api', 'open:dev', 'express-keepalive']);
};