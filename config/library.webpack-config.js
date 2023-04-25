/* eslint-disable no-undef,filenames/match-regex */
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
/* eslint-enable no-undef,filenames/match-regex */

const CLIENT_CORE_SERVICES = 'clientCoreServices';

// eslint-disable-next-line no-undef
module.exports = (config, options) => {
  config.plugins.push(new WebpackManifestPlugin(options));

  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  const externals = singleSpaWebpackConfig.externals || [];

  externals.push(CLIENT_CORE_SERVICES);

  const mergedConfig = {
    ...singleSpaWebpackConfig,
    externals
  };

  // console.log('***config***',config)
  console.log('***options***', options)
  return mergedConfig;
};
