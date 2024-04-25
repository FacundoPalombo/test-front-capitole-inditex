// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const isDev = process.env.NODE_ENV === 'development';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: './src/index.tsx',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
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
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
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
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
    alias: {
      '@App': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@components': path.resolve(__dirname, 'src/view/components/'),
    },
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
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join('./netlify.toml'),
          },
        ],
      })
    ),
      config.plugins.push(
        new WorkboxWebpackPlugin.GenerateSW({
          runtimeCaching: [
            {
              //? esta es la feature que almacena el cache por un día, se pudo haber hecho también con react query,
              // o con un transport de axios (intente primero eso).
              // Pero esta me parecía mas general y sencilla de implementar, ademas que esta el beneficio de registrar el serviceWorker.
              urlPattern: ({ url }) =>
                url.href.match(/https:\/\/api.allorigins.win\/get\?url=/gi) ||
                url.href.match(/https:\/\/corsproxy.io\/\?/gi),
              options: {
                cacheName: 'cors-proxy-requests',
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
  }
  if (isDev) {
    config.mode = 'development';

    // addition - add source-map support
    config.module.rules.push({
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'source-map-loader',
    });

    config.devtool = 'source-map';
  }
  return config;
};
