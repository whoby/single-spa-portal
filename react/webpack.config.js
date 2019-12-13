const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    singleSpaEntry: './src/singleSpaEntry.js',
    store: './src/store.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build/app1'),
    libraryTarget: 'amd',
    library: 'reactApp'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/app1/'
            }
          }
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
}
