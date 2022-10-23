let path = require("path");
const { LoaderOptionsPlugin } = require("webpack");
let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    publicPath: "dist/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = conf;
