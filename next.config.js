const webpack = require('webpack');
module.exports = {
  module: {
    loaders: [{ test: /node_modules\/flickity/, loader: 'imports?define=>undefined' }],
  },
};
