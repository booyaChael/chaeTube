const path = require("path");
const {fileURLToPath} = require('url');

module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    recorder: "./src/client/js/recorder.js",
  },
  mode: "development",
  watch: true,
  output: {
    filename: "[name].js",
    path: "./assets/js",
    path: path.resolve(__dirname, "assets", "js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};