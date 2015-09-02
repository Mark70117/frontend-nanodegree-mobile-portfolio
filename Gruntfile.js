var ngrok = require('ngrok');
module.exports = function (grunt) {
  var config = grunt.file.readYAML('Gruntconfig.yml');

  require('load-grunt-tasks')(grunt);

  require('./grunt_tasks/copy.js')(grunt, config);
  require('./grunt_tasks/pagespeed.js')(grunt, config, ngrok);
  require('./grunt_tasks/responsive_images.js')(grunt, config, ngrok);
  require('./grunt_tasks/inline.js')(grunt, config);
  require('./grunt_tasks/htmlmin.js')(grunt, config);
  require('./grunt_tasks/cssmin.js')(grunt, config);

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'copy',
    'cssmin',
    'inline',
    'htmlmin'
  ]);
};
