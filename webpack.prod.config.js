var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack')

module.exports = {
  target: 'node',
  entry: './src/server.js',
  output: {
    path: './dist/',
    filename: 'server_bundle.js'
  },
  externals: [nodeExternals()],
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.DefinePlugin({
      '__DEVTOOLS__': false //set it to true in dev mode
        }),
         new webpack.optimize.UglifyJsPlugin({
           compress:{
             warnings: true
           }
         })
    ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ],
        include: './src/server.js',
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      { test: /\.js$/,

                loaders: [
                    // 'imports?document=this',

                    // 'react-hot',
                    'babel-loader'
                    //,'jsx-loader'
                ],
      },
      { 
          test:  /\.json$/, 
          loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [
          'url'
        ],
        query: {
          limit: 8192
        }
      }
    ]
  }
}