const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  mode: 'development'
};