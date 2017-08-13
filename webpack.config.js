
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "./build/bundle.js",
    sourceMapFilename: "./build/bundle.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}