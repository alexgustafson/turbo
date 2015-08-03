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
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: true

          }
        },
        files: {
          "dist/index.html": ["src/index.jade"]
        }
      }
    },
    sass: {
      app: {
        // Takes every file that ends with .scss from the scss 
        // directory and compile them into the css directory. 
        // Also changes the extension from .scss into .css. 
        // Note: file name that begins with _ are ignored automatically
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: true, 
        outputStyle: 'nested', 
        imagePath: "../",
      }
    },
    // Grunt-contrib-watch
    watch: {
      sass: {
        // Watches all Sass or Scss files within the scss folder and one level down. 
        // If you want to watch all scss files instead, use the "**/*" globbing pattern
        files: ['src/sass/{,*/}*.{scss,sass}'],
        // runs the task `sass` whenever any watched file changes 
        tasks: ['sass']
      },
      options: {
        // Sets livereload to true for livereload to work 
        // (livereload is not covered in this article)
        livereload: true,
        spawn: false
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jade', 'sass', 'watch']);

};