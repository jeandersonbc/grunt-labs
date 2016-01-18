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
        },
        useminPrepare : {
            html : "dist/**/*.html"
        },
        usemin : {
            html : "dist/**/*.html"
        }

    });

    // Grunt tasks
    grunt.registerTask("optmize", ["useminPrepare", "concat", "uglify", "cssmin", "usemin"]);
    grunt.registerTask("dist", ["clean", "copy"]);

    grunt.registerTask("default", ["dist", "optmize"]);

    // Loading Grunt plugins
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-usemin");
}
