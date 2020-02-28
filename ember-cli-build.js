'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules']
            }
          },
          require('tailwindcss')('./config/tailwind.js'),
          require('autoprefixer'),
          require('postcss-mixins'),
          require('postcss-nested'),
          require('postcss-simple-vars')
        ]
      }
    }
  });
  return app.toTree();
};
