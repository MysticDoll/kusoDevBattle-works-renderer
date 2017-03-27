const webpack = require("webpack");
module.exports = {
  context: __dirname + "/src",
  entry: {
    "works-renderer": "./index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
          loader: "babel-loader",
          options:{
            presets: [
              ["es2015", {
                loose: true,
                module: true
              }]
            ]
          }
      }
    }]
  }
};
