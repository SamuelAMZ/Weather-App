const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(
  common,

  {
    mode: "developement",
    devtool: "source-map",

    output: {
      publicPath: "public",
      filename: "bundle.js",
      path: path.resolve(__dirname, "public"),
    },
  }
);
