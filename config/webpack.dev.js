const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 开发版本不压缩

module.exports = {
  entry: {
    index: [path.join(__dirname, "../src/public/js/PraiseButton.es6")],
    tag: [path.join(__dirname, "../src/public/js/tag.es6")]
  },
  output: {
    // path: path.join(__dirname, "../build/public/js/"),  // 两种写法都可以
    // filename: '[name]-[hash:5].js'
    path: path.join(__dirname, "../build/"),
    filename: "public/js/[name]-[hash:5].js"
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(["build/public/*"], {
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "dev"
      }
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("public/css/[name]-[hash:5].css"), // build文件夹里
    // 提取公共代码块
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "public/js/common/vendor-[hash:5].min.js"
    }),
    new HtmlWebpackPlugin({
      filename: "./views/layout.html",
      template:'src/widget/layout.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./views/index.html",
      template:'src/views/index.js',
      chunks: ['vendor', 'index', 'tag'],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./widget/index.html",
      template:'src/widget/index.html',
      inject: false
    })
  ]
};
