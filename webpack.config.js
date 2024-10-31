const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const purgecss = require('@fullhuman/postcss-purgecss'); // Import PurgeCSS

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    filename: 'index.html',
  }),
  new Dotenv({
    path: './.env', // Path to .env file (this is the default)
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      { from: './src/favicon.ico', to: '' },
      { from: './src/manifest.json', to: '' },
      { from: './src/logo192.png', to: '' },
      { from: './src/logo512.png', to: '' },
    ],
  }),
];

if (process.env.NODE_ENV === 'production') {
  webpackPlugins.push(new InjectManifest({
    swSrc: './src/service-worker.js',
    swDest: 'sw.js',
  }));
}

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                  ...(process.env.NODE_ENV === 'production' ? [purgecss({
                    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                  })] : []),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)?$/,
        use: 'file-loader?name=./static/media/[name].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    ...webpackPlugins,
  ],
};
