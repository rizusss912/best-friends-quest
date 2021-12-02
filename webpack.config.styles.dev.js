const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
  module: {
    rules: [
      {
            test: /\.m?jsx$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/dist/public/',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin({
        transformFn: function(dirName) {
          return [
            dirName + ".jsx",
            dirName + ".js",
            "index.jsx",
            dirName + "/" + ".index.jsx",
            "index.js",
            dirName + "/" + ".index.js",
          ]
        }
      })
    ],
    extensions: ['', '.js', '.jsx'],
  }
};