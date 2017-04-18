module.exports = {
  entry: {
    'app': [
      './app.js'
    ]
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnWarning: false,
          failOnError: false,
          outputReport: {
            filePath: 'eslint-errors.xml'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}