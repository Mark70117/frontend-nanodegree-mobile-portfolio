module.exports = function (grunt, config) {
  grunt.config.merge ({
    imagemin: {
      options: {
        optimizationsLevel: 7
      },
      jpg: {
        files: [
          {
            expand: true, 
            cwd: config.responsiveImgDir,
            src: ['**/*-*.{jpg,gif,png}'],
            dest: config.compressedImgDir,
            ext: '.jpg'
          }
        ]
      }
    }
  });
};

