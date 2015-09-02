var ngrok = require('ngrok');
module.exports = function (grunt) {
  var config = grunt.file.readYAML('Gruntconfig.yml');

  require('load-grunt-tasks')(grunt);

  require('./grunt_tasks/copy.js')(grunt, config);
  require('./grunt_tasks/pagespeed.js')(grunt, config, ngrok);

  grunt.registerTask('default', [
    'copy',
    'pagespeed'
  ]);
};
