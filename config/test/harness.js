'use strict';

global.expect = require('chai')
  .use(require('sinon-chai'))
  .use(require('chai-as-promised')).expect;
global.sinon = require('sinon');
