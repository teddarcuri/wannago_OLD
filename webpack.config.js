var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
      test   : /\.js$/,
      exclude: /node_modules/,
      loader : 'babel-loader',
    }]
  },
  plugins: [
    new DashboardPlugin(dashboard.setData)
  ]

}
