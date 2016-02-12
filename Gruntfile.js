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
        },
        imagemin : {
            public: {
                expand: true,
                cwd: "dist/img",
                src: "**/*.{gif,png,jpg}",
                dest: "dist/img"
            }
        },
        rev: {

            // versioning settings
            options: {
                encoding: "utf8",
                algorithm: "md5",
                length: 8
            },
            images: {
                src: ["dist/img/**/*.{jpg,png,gif}"]
            },
            scripts: {
                src: ["dist/css/**/*.min.css", "dist/js/**/*.min.js"]
            }
        }

    });

    // Grunt tasks

    // has to be executed before "usemin"
    grunt.registerTask("versioning", ["rev:images", "rev:scripts"]);

    grunt.registerTask("optmize", ["useminPrepare", "concat", "uglify", "cssmin", "versioning", "usemin", "imagemin"]);
    grunt.registerTask("dist", ["clean", "copy"]);

    grunt.registerTask("default", ["dist", "optmize"]);

    // Loading Grunt plugins
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-rev");
}
