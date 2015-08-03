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
        options: {
            sourceMap: true
        },
        compile: {
          cwd: 'sass',
          src: ['src/sass/*.scss'],
          dest: 'dest/css/',
          ext: '.css'
        }
    },
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jade', 'sass']);

};