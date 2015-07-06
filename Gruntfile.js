module.exports = function(grunt){

    var config = {
        pkg : grunt.file.readJSON("package.json"),
        express: {
            api: {
                options: {
                    port: 3001,
                    server: "ui/server.js"
                }
            }
        }
    };

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['express:api', 'express-keepalive']);
};