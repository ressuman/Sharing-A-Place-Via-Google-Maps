// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const Dotenv = require("dotenv-webpack");

// module.exports = {
//   entry: "./src/ts/app.ts",

//   output: {
//     filename: "js/bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },

//   devtool: "inline-source-map",

//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,
//         type: "asset/resource",
//         generator: {
//           filename: "images/[name][ext][query]",
//         },
//       },
//     ],
//   },

//   resolve: {
//     extensions: [".ts", ".js"],
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./index.html",
//       filename: "index.html",
//     }),
//     new Dotenv(),
//   ],

//   devServer: {
//     // static: {
//     //   directory: path.resolve(__dirname, "dist"),
//     // },
//     static: [
//       {
//         directory: path.join(__dirname),
//       },
//     ],
//     compress: true,
//     port: 9000,
//     open: true,
//   },

//   mode: "development",
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/ts/app.ts",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new Dotenv(),
    new CleanPlugin.CleanWebpackPlugin(),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },

  mode: "production",
};
