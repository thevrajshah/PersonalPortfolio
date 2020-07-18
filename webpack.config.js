const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const package = require("./package.json");

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";
  return {
    entry: {
      app: "./src/Browser.js",
      vendor: Object.keys(package.dependencies),
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "build"),
    },
    devtool: isDevMode ? "cheap-module-source-map" : false,
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(png|gif|jp(e*)g|svg|ico)$/,
          loader: "url-loader",
          options: {
            limit: 8000,
            name: "images/[hash]-[name].[ext]",
          },
        },
        {
          test: /\.js(x*)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(s*)css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.json5$/i,
          loader: "json5-loader",
          options: {
            esModule: false,
          },
          type: "javascript/auto",
        },
      ],
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./template.js",
      }),
    ],
  };
};
