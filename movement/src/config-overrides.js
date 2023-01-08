module.exports = function override(config, env) {
  // Add the fallback for the 'crypto' module
  config.resolve.fallback = {
    crypto: require.resolve("crypto-browserify"),
  };

  return config;
};
