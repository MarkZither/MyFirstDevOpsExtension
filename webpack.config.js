/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

const observerConfig = {
  entry: './src/observer/index.ts',
  mode: 'development',
  output: {
    chunkLoadingGlobal: 'wpobserverConfigWidget',
    filename: 'observer.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',

  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.json$/, use: 'json' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'observer.html',
    }),
  ],
};

const confighubConfig = {
  entry: './src/confighub/index.tsx',
  mode: 'development',
  output: {
    chunkLoadingGlobal: 'wpconfighubConfigWidget',
    filename: 'confighub.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',

  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.json$/, use: 'json' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      /*{
        test: /\.css$/,
        include: APP_DIR,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            namedExport: true,
          },
        }],
      }, 
      {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ['style-loader', 'css-loader'],
      },*/
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashModuleReplacementPlugin(),
    new MonacoWebpackPlugin({ languages: ['json'] }),
    new HtmlWebpackPlugin({
      template: 'static/confighub.html',
      filename: 'confighub.html',
    }),
  ],
};

module.exports = [observerConfig, confighubConfig];