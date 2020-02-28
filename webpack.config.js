const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: "./src/App/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              strictMath: true,
              noIeCompat: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HTMLWebpackPlugin(),
    require('autoprefixer'),
  ],
  devServer: {
    open: true,
    historyApiFallback: true
  }
}
