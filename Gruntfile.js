module.exports = function(grunt) {

    // Grunt tasks settings
    grunt.initConfig({

        // grunt-contrib-copy settings
        copy : {

            // subtask named 'public'
            public : {
                nonull: true,
                cwd: "public",
                src: "**",
                dest: "dist",
                expand: true
            }
        },
        clean : {
            dist : {
                src: "dist"
            }
        }

    });

    // Grunt tasks
    grunt.registerTask("dist", ["clean", "copy"])
    grunt.registerTask("default", "dist");

    // Loading Grunt plugins
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
}
