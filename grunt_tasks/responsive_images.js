module.exports = function (grunt, config) {
  grunt.config.merge ({
    responsive_images: {
      dev: {
        sizes: [
          {
            name: 'small',
            height: 70
          },
          {
            name: 'medium',
            height: 75
          },
          {
            name: 'large',
            height: 150
          }
        ],
        files: [
          {
            expand: true, 
            cwd: config.srcImgDir,
            src: ['**/*.{jpg,gif,png}'],
            dest: config.dstImgDir,
          }
        ]
      }
    }
  });
};

