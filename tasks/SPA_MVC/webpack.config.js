const HtmlWebpackPlugin = require('html-webpack-plugin');	
const MiniCssExtractPlugin = require('mini-css-extract-plugin');	
const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.[hash].bundle.js',
    clean: true,
  },
  plugins: [
      new HtmlWebpackPlugin ({
          template: path.resolve(__dirname, 'index.html'),
      }),
      new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 
            'css-loader'
          ]
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },    
};