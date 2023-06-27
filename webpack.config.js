// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: './src/view/index.js',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          reuseExistingChunk: true,
        },
        'react-vendors': {
          test: /[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react-vendors',
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new WebpackManifestPlugin({ basePath: '/' }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
  performance: {
    hints: false,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());

    config.plugins.push(
      new WorkboxWebpackPlugin.GenerateSW({
        runtimeCaching: [
          {
            //? esta es la feature que almacena el cache por un día, se pudo haber hecho también con react query,
            // o con un transport de axios (intente primero eso).
            // Pero esta me parecía mas general y sencilla de implementar, ademas que esta el beneficio de registrar el serviceWorker.
            urlPattern: ({ url }) =>
              url.href.match(/https:\/\/api.allorigins.win\/get\?url=/gi),
            options: {
              cacheName: 'allowOrigins-requests',
              expiration: {
                maxAgeSeconds: 3600 * 24,
                maxEntries: 200,
              },
            },
            handler: 'StaleWhileRevalidate',
          },
        ],
      })
    );
  } else {
    config.mode = 'development';
  }
  return config;
};
