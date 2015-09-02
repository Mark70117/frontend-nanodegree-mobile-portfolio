module.exports = function (grunt, config) {
  grunt.config.merge ({
    responsive_images: {
      options: {
        engine: 'im',
        sizes: [
          {
            name: 'small',
            height: '75px',
            quality:  70
          },
          {
            name: 'medium',
            height: '150px',
            quality: 80
          },
          {
            name: 'large',
            height: '300px',
            quality: 90
          }
        ]
      },
      dev: {
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

