const path = require('path');

module.exports = {
  entry: './src/Controller/myChart.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};