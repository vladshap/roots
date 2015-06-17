module.exports = function (grunt) {

    var timestamp = Date.now();
    var autoprefixer = require('autoprefixer-core');
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                noCache: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'assets/styles/site-styles.css': 'scss/site-styles.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    autoprefixer({ browsers: ['last 2 version'] }).postcss
                ]
            },
            dist: { src: 'assets/styles/*.css' }
        },
        //jekyll: {                             // Task
        //    options: {                          // Universal options
        //        bundleExec: true,
        //        src : '<%= app %>'
        //    },
        //    dist: {                             // Target
        //        options: {                        // Target options
        //            dest: '<%= dist %>',
        //            config: '_config.yml,_config.build.yml'
        //        }
        //    },
        //    serve: {                            // Another target
        //        options: {
        //            dest: '.jekyll',
        //            drafts: true
        //        }
        //    }
        //},
        watch: {
            options: {
                spawn: false
            },
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dist', 'postcss:dist']
            }
        },
        browserSync: {
            bsFiles: {
                src : ['assets/styles/*.css', '*.html', '*.js']
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
    });
    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    //grunt.loadNpmTasks('grunt-jekyll');

    // define default task
    grunt.registerTask('serve', ['watch', 'browserSync']);
};