'use strict';

const babelRc = require('../babel/babelrc.json');
babelRc.plugins = [
  require('../../dev')
    .resolve('babel-plugin-transform-runtime')
];

module.exports = wallaby => {
  return {
    files: [
      'src/**/*.js',
      'test/harness.js'
    ],
    tests: [
      'test/**/*.spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'mocha',
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelRc)
    },
    debug: true,
    bootstrap (wallaby) {
      const path = require('path');
      require(path.join(wallaby.projectCacheDir, 'test', 'harness'));
    },
    filesWithNoCoverageCalculated: ['test/harness.js']
  };
};
