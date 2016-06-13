'use strict';

// the plugin babel-root-import lets us get files from /src using ~
require('babel-register')({
  plugins: [
    ['babel-root-import', {
      "rootPathSuffix": "src"
    }]
  ]
});

const chai = require('chai');
const jsdom = require('jsdom').jsdom;
const sinon = require('sinon');

let exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

/* include Chai globally instead of in every test */
global.expect = chai.expect;

/* and sinon */
global.sinon = sinon;
