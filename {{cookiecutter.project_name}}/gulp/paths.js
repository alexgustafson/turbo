var path = require('path');

var appRoot = 'src/';
var outputRoot = '';

module.exports = {

    all: appRoot + '**/*.*',

    scss: appRoot + 'scss/**/*.scss',
    jade: appRoot + 'jade/**/*.jade',
    jade_exclude: '!' + appRoot + 'jade/**/_*.jade', // dont compile jade files that begin with _

    assets: appRoot + 'assets/**/*',
    //assets_dest: outputRoot + 'assets/',

    scripts: appRoot + 'scripts/**/*.js',
    //scripts_output: outputRoot + 'scripts/',

    //wiredep stuff
    bowerDirectory: "bower_components",
    bowerJson: 'bower.json',
    wiredep_jade_output: appRoot + 'jade/',
    wiredep_scss_output: appRoot + 'scss/',
    wiredep_sass_output: appRoot + 'sass/',

    //dest: outputRoot,
    //styleOutput: outputRoot + 'style/',

    /*
     django stuff:
     prototype is the name of this project, adapt this to
     whatever name your django module is called, for example:
     '../static/Qblog/'
     */
    jade_dest: outputRoot + 'templates/prototype/',
    dest: outputRoot + 'static/prototype/',
    assets_dest: outputRoot + 'static/prototype/assets/',
    scripts_output: outputRoot + 'static/prototype/scripts/',
    styleOutput: outputRoot + 'static/prototype/style/',

};