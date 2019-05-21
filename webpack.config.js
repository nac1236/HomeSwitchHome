module.exports = {
    entry: './src/app/Index.js',
    output: {
      path: __dirname + '/src/public',
      filename: './js/bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
      port: 5000,
      open: true,
      proxy: {
        "/api": "http://localhost:5000"
      }
    }
  };
