module.exports = function (grunt, config) {
  grunt.config.merge ({
    inline: {
      dist: {
        src: 'src/index.html',
        dest: 'src/index.inline.html',
      }
    }
  });
};

