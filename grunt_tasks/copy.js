module.exports = function (grunt, config) {
  grunt.config.merge ({
    copy: {
      main: {
        files: [
          {
            expand: true, 
            cwd: config.srcImgDir,
            src: '*',
            dest: config.dstImgDir,
            flatten: false,
            filter: 'isFile'
          },
          {
            expand: true, 
            cwd: config.srcViewsImgDir,
            src: '*',
            dest: config.dstViewsImgDir,
            flatten: false,
            filter: 'isFile'
          }
        ]
      }
    }
  });
};

