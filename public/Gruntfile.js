module.exports = function(grunt) {

    // Grunt tasks settings
    grunt.initConfig({

        // grunt-contrib-copy settings
        copy : {

            // subtask named 'public'
            public : {
                nonull: true,
                cwd: ".",
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
    grunt.registerTask("default", ["clean", "copy"]);

    // Loading Grunt plugins
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
}
