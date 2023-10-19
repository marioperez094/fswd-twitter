const { environment } = require('@rails/webpacker')

const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@pages': path.resolve(__dirname, '..', '..', 'app/javascript/src/pages'),
    }
  }
}

environment.config.merge(customConfig);

// Uncomment below to enable split chunks
// environment.splitChunks()

module.exports = environment
