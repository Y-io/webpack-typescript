const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpackBarPlugin = require('./webpackBarPlugin');

module.exports = (envVars, args) => {
  // console.log({ args, envVars });
  const { env } = envVars;
  let port = args.port;
  const envConfig = require(`./webpack.${env}.js`);

  if (!port) {
    port = 8080;
  }

  return merge(commonConfig, envConfig, {
    plugins: [webpackBarPlugin({ env, port })],
  });
};
