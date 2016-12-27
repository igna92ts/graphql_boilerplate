var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  devtool: 'eval',
  entry: './src/server.js',
  output: {
    path: './dist/',
    filename: 'server_bundle.js'
  },
  externals: [nodeExternals()],
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
            'es2015',
            'stage-2'
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