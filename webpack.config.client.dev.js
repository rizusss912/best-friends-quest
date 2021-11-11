const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    entry: './src/bundle.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js',
    },
    mode: 'development',
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
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        plugins: [
          new DirectoryNamedWebpackPlugin({
            transformFn: function(dirName) {
              return [
                dirName,
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
