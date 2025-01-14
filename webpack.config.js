// webpack.config.js
module.exports = {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    // other webpack configurations
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    // other webpack configurations
    
  };
  