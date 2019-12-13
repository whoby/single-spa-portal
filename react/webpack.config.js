const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    singleSpaEntry: './src/singleSpaEntry.js',
    store: './src/store/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build/app1'),
    libraryTarget: 'umd',
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/app1/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'eval-source-map'
}
