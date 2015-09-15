var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app' // your entry point
  ],
  output: { path: __dirname + '/dist', publicPath: '/dist/' },
  plugins: [ new webpack.HotModuleReplacementPlugin(), ],
  module: {
    loaders: [ { test: /\.js$/, exclude: /node_modules/, loaders: [ 'react-hot', 'babel-loader' ] } ]
  }
};
