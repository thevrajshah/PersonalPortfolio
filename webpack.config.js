const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "public"),
    },
    devtool: isDevMode ? "cheap-module-source-map" : false,
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.js(x*)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
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
            name: "[name].[ext]",
          },
        },
        {
          test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: url => url.replace(/public/, ""),
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
        template: "./public/index.html",
      }),
    ],
  };
};
