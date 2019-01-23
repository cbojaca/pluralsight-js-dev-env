// this file isn't  transpiled, so must CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {}
