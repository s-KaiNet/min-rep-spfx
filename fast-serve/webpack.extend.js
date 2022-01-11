/*
* User webpack settings file. You can add your own settings here.
* Changes from this file will be merged into the base webpack configuration file.
* This file will not be overwritten by the subsequent spfx-fast-serve calls.
*/
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const vuePlugin = new VueLoaderPlugin();
const themedStyleLoader = require.resolve('@microsoft/loader-load-themed-styles');
const webpackConfig = {
}

// for even more fine-grained control, you can apply custom webpack settings using below function
const transformConfig = function (initialWebpackConfig) {
  // transform the initial webpack config here, i.e.
  // initialWebpackConfig.plugins.push(new webpack.Plugin()); etc.

  // transform the initial webpack config here, i.e.
  // initialWebpackConfig.plugins.push(new webpack.Plugin()); etc.

  const loadersConfigs = [
    {
      test: /\.vue$/, // vue
      use: [{
        loader: 'vue-loader'
      }]
    }, {
      resourceQuery: /vue&type=script&lang=ts/, // typescript
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }, {
      resourceQuery: /vue&type=style.*&lang=scss/, // scss
      use: [{
        loader: themedStyleLoader,
        options: {
          async: true
        }
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]_[sha1:hash:hex:8]'
        }
      },
        'sass-loader'
      ]
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
        }
      ]
    },
  ];

  initialWebpackConfig.plugins.push(vuePlugin);
  initialWebpackConfig.module.rules.push(...loadersConfigs);

  return initialWebpackConfig;

}

module.exports = {
  webpackConfig,
  transformConfig
}
