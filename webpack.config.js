const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: ["./src/App.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
};
