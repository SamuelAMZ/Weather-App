const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(
  common,

  {
    mode: "production",

    plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })],

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },

    output: {
      publicPath: "public",
      filename: "bundle.js",
      path: path.resolve(__dirname, "public"),
    },
  }
);
