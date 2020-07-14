const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";
  return {
    entry: "./src/Browser.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
    },
    devtool: isDevMode ? "cheap-module-source-map" : false,
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(svg|gif|jpe?g|png|ico)$/,
          loader: "file-loader",
        },
        {
          test: /\.js(x*)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(scss|css)$/,
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
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          exclude: /node_modules/,

          loader: "file-loader",
          options: {
            name: "build/fonts/[name].[ext]",
          },
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
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
      new HtmlWebpackPlugin({
        template: "./template.js",
      }),
    ],
  };
};
