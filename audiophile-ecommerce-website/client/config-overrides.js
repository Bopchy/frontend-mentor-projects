/* eslint-disable  react-hooks/rules-of-hooks */
const { useBabelRc, override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  useBabelRc(),
  addWebpackModuleRule({
    test: /\.(js|tsx)$/,
    use: [
      { loader: "babel-loader" },
      {
        loader: "@linaria/webpack-loader",
        options: {
          source: "src/.linaria_cache",
          sourceMap: process.env.NODE_ENV !== "production",
        },
      },
    ],
  })
);
