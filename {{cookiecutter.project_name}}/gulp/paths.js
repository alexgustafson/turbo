var path = require('path');

module.exports = {

    jade_files: 'templates/{{ cookiecutter.project_name }}/**/*.jade',
    scss_files: 'static/{{ cookiecutter.project_name }}/**/*.scss',

    //wiredep stuff
    bowerDirectory: "static/{{ cookiecutter.project_name }}/vendor/",
    bowerJson: 'bower.json',
    wiredep_jade: 'templates/{{ cookiecutter.project_name }}/',
    wiredep_scss: 'static/{{ cookiecutter.project_name }}/',
    wiredep_sass: 'static/{{ cookiecutter.project_name }}/',

};

