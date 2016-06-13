/**
 * Created by asimz on 12/06/2016.
 */
/* eslint-disable no-var*/
/* eslint-disable-line no-undef*/

// Sets Node environment variable to test
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile code from ES6 to ES5
require('babel-register')();

// Disables Webpack-specific features that Mocha doesn't understand.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

//Requires jsdom so we can test via an in-memory DOM in Node
var jsdom = require('jsdom').jsdom;

//Sets up global vars that mimic a browser.
var exposedProperties = ['window', 'navigator', 'document'];

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

documentRef = document;