const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app.ts'
  ],
  output: {
    filename: 'app.js',
    path: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'ts-loader'
        ]
      },
      {
        test: /\.html$/,
        exclude: /index\.template\.html/,
        use: [
          'ngtemplate-loader',
          'html-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular Webpack Seed',
      template: 'index.template.html'
    })
  ]
};