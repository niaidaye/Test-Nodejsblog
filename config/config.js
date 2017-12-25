const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'test-blog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/test-blog-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test-blog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/test-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test-blog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/test-blog-production'
  }
};

module.exports = config[env];
