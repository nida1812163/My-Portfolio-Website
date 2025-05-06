module.exports = function override(config, env) {
    const babelRule = config.module.rules.find((rule) =>
      rule.loader && rule.loader.includes("babel-loader")
    );
    if (babelRule) {
      babelRule.options.plugins = [
        ...(babelRule.options.plugins || []),
        "@babel/plugin-proposal-private-property-in-object",
      ];
    }
    return config;
  };
  