module.exports = function (grunt, config) {
  grunt.config.merge ({
    cssmin: {
      preinline: {
        files: [{
          expand: true,
          cwd: 'src/css', 
          src: ['*.css','!*.min.css'],
          dest: 'src/css',
          ext: '.min.css'
        }]
      }
    }
  });
};

