const webpack = require('webpack');

module.exports = {
  // ... diğer yapılandırma ayarları ...

  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};