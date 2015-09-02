module.exports = function (grunt, config, ngrok) {
  grunt.config.merge ({
    pagespeed: {
      options: {
        nokey: true,
        locale: 'en_US',
        thresold: 40,
        url: 'http://5c5e81a8.ngrok.io'
      },
      local: {
        options: {
          strategy: 'desktop'
        }
      },
      mobile: {
        options: {
          strategy: 'desktop'
        }
      }
    }
  });

  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8080;

    ngrok.connect({proto: 'http', addr: 8080, authtoken: '4oXXQBEGpD5dxRX2XwrJN_22f8gNBScFaR3tLM2gsti'}, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

};

