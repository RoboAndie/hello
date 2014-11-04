module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          config: 'config.rb'
        }
      // },
      // dev: {                    // Another target
      //   options: {
      //     sassDir: 'sass',
      //     cssDir: ''
      //   }
      }
    },

    autoprefixer: {
      options: {
        map: 'true',
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },

    watch: {
      css: {
        files: ['sass/*.scss', 'sass/**/*.scss'],
        tasks: ['compass','autoprefixer'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'compass', 'autoprefixer']);


};