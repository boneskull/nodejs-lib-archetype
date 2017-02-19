'use strict';

const devRequire = require('../../dev');

global.expect = devRequire('chai')
  .use(devRequire('sinon-chai'))
  .use(devRequire('chai-as-promised')).expect;
global.sinon = devRequire('sinon');
