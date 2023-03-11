const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const htmlPages = [{ name: 'index', path: './src/index.html' }];
const multipleHtmlPlugin = htmlPages.map(page => {
  return new HtmlWebpackPlugin({
    template: `${page.path}`,
    filename: `${page.name}.html`,
    chunks: [`${page.name}`],
    favicon: './src/public/favicon.ico',
  });
});

const config = {
  entry: {
    index: './src/pages/index/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    host: 'localhost',
  },
  plugins: [].concat(multipleHtmlPlugin),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset',
        generator: {
          filename: './font/[name][ext]',
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset',
        generator: {
          filename: './img/[name][ext]',
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
