# Building Application with React and Redux in ES6

## Introduction
Today we are going to kick off the first installment in a new series of tutorials **Building Application with React and Redux in ES6**, that will focus on becoming proficient and effective with React and Redux libraries. Before we start building any real application there is a question we need to answer.
>Can I build something large complex, interactive and testable application with it?

React is just a library and definitely It will need other tools, libraries, frameworks and patterns to build something meaningful. Redux is one of the library which in now defacto flux implementation for React and we are going to explore from the ground-up.

In this **four-part blog series**  React + Redux tutorial I am going to explain how to build real-word application from the ground up. 

* [Part 1 - Setup Dev Environment](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment)
* [Part 2 - React Component and Setup React Router](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part2)
* Part 3 - Redux, Actions, Stores and Reducers + React with Redux
* Part 4 - Testing React + Redux

---
## Part 1 - Setup Dev Environment
As I mentioned we will be building application from ground-up so before moving writing code I would like to setup Dev Environment first. In Javascript we have many options for setup a magical dev environment and our Dev-Environment should answer following:

>What libraries should I compose?
>How do I connect it all together in a way that makes sense, maintainable and testable?

#### Dev Environment Goals
Each Dev environment has number of different goals, it depends on multiple factors. In this tutorial I want to cover following goals:

* ES6 Transpilation
* Bundling
* Minification
* Linting
* JSX Compilation
* Automated Testing

We will use following libraries/frameworks to achieve those goals:

###### [Babel](https://babeljs.io/)
We will be writing our code in ES6 so we need Babel to onvert our ES6 code into ES5 so browser can understand the code.

###### [Babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
Babel will transplant ES6 code into ES5 however there are some ES6 features cannot be transplant. e.g. static method like `Array.from` or `Object.assign`. Using Babel-polyfill can add support for those new built-ins features.

###### [Webpack](https://webpack.github.io/)
Webpack is one of the most popular module to bundle the application among the React Community, It extremely flexible and easy to use. Webpack will compile our code & manifest into single or multiple file as we need it.

###### [ESLint](http://eslint.org/)
Most famous JavaScript linting utility, ESLint will help us to quickly catch mistakes, force best practices in our code and maintain consistency in our project.

###### [mocha](https://mochajs.org/)
Mocha is a feature-rich popular javascript testing framework, it's simple, flexible and fun.

##### [NodeJS](https://nodejs.org/)
I prefer to use latest NodeJS v6.* however v4.4* will also work. If have already NodeJS installed and concerns about updating your NodeJs which may break exiting projects I would suggest you to use Node version manager [nvm](https://github.com/creationix/nvm) to use multiple node version. Please follow the [installation instruction](https://github.com/creationix/nvm#installation) for nvm.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


### Creating our Application
I'm using [WebStrom](https://www.jetbrains.com/webstorm/) for my development because it offers best support for ES6, you can used your favorite editor which support ES6.

Let's create application by creating a `package.json`, `./src/index.html` and `./src/index.js` files and add following content into files.
 
[package.json](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/package.json)
```json
{
  "name": "building-application-with-react-and-redux-in-es6-part1-setup-dev-environment",
  "version": "1.0.0",
  "description": "Building Application with React and Redux in ES6 Part 1 - Setup Dev Environment",
  "author": "Muhammad Asim",
  "license": "MIT",
  "scripts": {
    "start": "npm-run-all --parallel serve lint:watch test:watch",
    "serve": "babel-node bin/server",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress bin/testSetup.js \"src/**/*.spec.js\"",
    "test:watch": "npm test -- --watch"
  },
  "dependencies": {
    "babel-polyfill": "6.9.1",
    "bootstrap": "3.3.6",
    "jquery": "3.0.0",
    "react": "15.1.0",
    "react-dom": "15.1.0",
    "react-redux": "4.4.5",
    "react-router": "2.4.1",
    "react-router-redux": "4.0.5",
    "redux": "3.5.2",
    "redux-thunk": "2.1.0",
    "toastr": "2.1.2"
  },
  "devDependencies": {
    "babel-cli": "6.10.1",
    "babel-core": "6.9.1",
    "babel-loader": "6.2.4",
    "babel-plugin-react-display-name": "2.0.0",
    "babel-preset-es2015": "6.9.0",
    "babel-preset-react": "6.5.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-register": "6.9.0",
    "colors": "1.1.2",
    "compression": "1.6.2",
    "cross-env": "1.0.8",
    "css-loader": "0.23.1",
    "enzyme": "2.3.0",
    "eslint": "2.12.0",
    "eslint-plugin-import": "1.8.1",
    "eslint-plugin-react": "5.1.1",
    "eslint-watch": "2.1.11",
    "eventsource-polyfill": "0.9.6",
    "expect": "1.20.1",
    "express": "4.13.4",
    "extract-text-webpack-plugin": "1.0.1",
    "file-loader": "0.8.5",
    "jsdom": "9.2.1",
    "mocha": "2.5.3",
    "nock": "8.0.0",
    "npm-run-all": "2.1.2",
    "open": "0.0.5",
    "react-addons-test-utils": "15.1.0",
    "redux-immutable-state-invariant": "1.2.3",
    "redux-mock-store": "1.1.0",
    "rimraf": "2.5.2",
    "style-loader": "0.13.1",
    "url-loader": "0.5.7",
    "webpack": "1.13.1",
    "webpack-dev-middleware": "1.6.1",
    "webpack-hot-middleware": "2.10.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment"
  }
}
```

[./src/index.html](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/src/index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Building Application with React and Redux in ES6 Part 1 - Setup Dev Environment</title>
</head>
<body>
<h1>Building Application with React and Redux in ES6 Part 1 - Setup Dev Environment</h1>
<div id="app"></div>
<script src="/bundle.js"></script>
</body>
</html>
```

[./src/index.js](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/src/index.js)
```javascript
console.log('hello world');
```

---

### Setup Application
At this point we have created a basic application in next steps we will setup application to achieved our Dev Environment Goals.

###### Configure [Babel](https://babeljs.io/)

We are writing our code in ES6  in this project we need to transpiler down our code into ES5 so browser can understand the code. We can use babel by creating `.babelrc` file in our project root directory.

[.babelrc](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/.babelrc)
```json
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
```
In this file we configure babel with react and es2015 presets and in development environment we add extra preset `react-hmre`.

###### Configure [Webpack](https://webpack.github.io/)
As we mentioned early Webpack is one of the most popular module to bundle the application. Webpack can be configure by creating `webpack.config.js` file in our project. We can create separate `webpack.config.[ENV].js` for each environment but for now I will create config `webpack.config.dev.js` for dev.

[webpack.config.dev.js](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/webpack.config.dev.js)
```javascript
import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: true,
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web', //Compile for usage in a browser-like environment
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
```

In this file define entry point of our application we added `webpack-hot-middleware/client?reload=true` to auto reload page in browser and  `eventsource-polyfill` to support reload in IE.
```js
entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/index'
    ]
```
    
  
Next we configure target as `web` so our code will compile for browser-like environment.  Learn more about what other option are available follow [webpack#target](https://webpack.github.io/docs/configuration.html#target).
 
We define output variables and tell webpack about our code location in `devServer`. Webpack will bundle all the code from `./src` and will bundle our code into `bundle.js`,  this file we have used in our `index.html` file. 
```js
 output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    }
```
    
    
We also add some plugins to enhance our development experience `HotModuleReplacementPlugin` enable replace module without browser refresh. `NoErrorsPlugin` will show nice message in the browse and will not break the browser.
``` js
plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoErrorsPlugin()
 ]
```

In last we defined the module and let webpack know what type of files we want to handle in application.
 

###### Configure [ESLint](http://eslint.org/)
ESLint help us to catch mistakes, maintain code consistency, force best practices and lint our code. We can add eslint features in our application by creating `.eslintrc` file in our project root directory.

[.eslint](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/.eslint)
```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:import/errors",
       "plugin:import/warnings"
     ],
     "plugins": [
       "react"
     ],
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "env": {
       "es6": true,
       "browser": true,
       "node": true,
       "jquery": true,
       "mocha": true
     },
     "rules": {
       "comma-spacing": 2,
       "comma-style": [2, "last"],
       "curly": [2, "multi-line"],
       "eol-last": 2,
       "eqeqeq": 1,
       "key-spacing": [1, {"beforeColon": false, "afterColon": true, "mode": "minimum"}],
       "keyword-spacing": [2, {
         "before": true,
         "after": true,
         "overrides": {
           "return": { "after": true },
           "throw": { "after": true },
           "case": { "after": true }
         }
       }],
       "no-caller": 2,
       "no-cond-assign": 2,
       "no-const-assign": 2,
       "no-eval": 2,
       "no-extend-native": 2,
       "no-extra-parens": 1,
       "no-extra-semi": 2,
       "no-implied-eval": 2,
       "no-irregular-whitespace": 1,
       "no-loop-func": 2,
       "no-mixed-spaces-and-tabs": 1,
       "quotes": 0,
       "no-console": 1,
       "no-debugger": 1,
       "no-var": 1,
       "semi": [1, "always"],
       "no-trailing-spaces": 0,
       "no-unused-vars": 1,
       "no-underscore-dangle": 0,
       "no-alert": 0,
       "no-lone-blocks": 0,
       "jsx-quotes": 1,
       "react/display-name": [ 1, {"ignoreTranspilerName": false }],
       "react/forbid-prop-types": [1, {"forbid": ["any"]}],
       "react/jsx-boolean-value": 1,
       "react/jsx-closing-bracket-location": 0,
       "react/jsx-curly-spacing": 1,
       "react/jsx-indent-props": 0,
       "react/jsx-key": 1,
       "react/jsx-max-props-per-line": 0,
       "react/jsx-no-bind": 1,
       "react/jsx-no-duplicate-props": 1,
       "react/jsx-no-literals": 0,
       "react/jsx-no-undef": 1,
       "react/jsx-pascal-case": 1,
       "react/jsx-sort-prop-types": 0,
       "react/jsx-sort-props": 0,
       "react/jsx-uses-react": 1,
       "react/jsx-uses-vars": 1,
       "react/no-danger": 1,
       "react/no-did-mount-set-state": 1,
       "react/no-did-update-set-state": 1,
       "react/no-direct-mutation-state": 1,
       "react/no-multi-comp": 1,
       "react/no-set-state": 0,
       "react/no-unknown-property": 1,
       "react/prefer-es6-class": 1,
       "react/prop-types": 1,
       "react/react-in-jsx-scope": 1,
       "react/require-extension": 1,
       "react/self-closing-comp": 1,
       "react/sort-comp": 1,
       "react/wrap-multilines": 1
     }
   }
```
 
In the file we extends lint by using `eslint:recommended` as our based settings and for better lint error and warnings messages we `plugin:import/errors` and `plugin:import/warnings`. 

Next we add [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) plugins to support React specific linting rules. To see what react rule are supported please follow the [React specific linting rules](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules). As we are writing code in ES6 and application will have jsx code we configure options to support both by `parserOptions`

```json
"parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
```

We also defined some global environment variables eslint should expect in the code.
```json
"env": {
     "es6": true,
     "browser": true,
     "node": true,
     "jquery": true,
     "mocha": true
}
```


###### Configure Testing via [mocha](https://mochajs.org/)
For NodeJS application, Mocha is the gold standard to write the test it's simple, flexible and fun.

Let's setup mocha and add our first test in application. Create `./bin/testSetup.js` file and add following content.

[./bin/testSetup.js](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/bin/testSetup.js)
```js
/* eslint-disable no-var*/
/* eslint-disable-line no-undef*/

// Sets Node environment variable to test
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile code from ES6 to ES5
require('babel-register')();

// Disables Webpack-specific features
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
```

In the file we setup environment variable to test, register babel to transpile ES6 to ES5 and disable webpack-specific features.

We also configure virtual DOM and HTML standards by adding [jsdom](https://github.com/tmpvar/jsdom). This will help to test React components without the browser and in last we expose some browser specific global variables which jsdom should expect during test.

Next we will write our first test by adding `./src/index.spec.js` file in application.
[./src/index.spec.js](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/src/index.spec.js)
```js
import expect from 'expect';

describe('Our first test', () =>{
    it('should pass', ()=>{
        expect(true).toEqual(true);
    });
});

```

  
##### Setup [Express](http://expressjs.com/)
Express is a web application server framework, that provides a robust set of features for web and mobile applications.
Let's create a `./bin/server.js` in application and add following content.
[./bin/server.js](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/bin/server.js)
```js
/* eslint-disable no-console */

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const port = 9000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

```

In the file we used `webpack.config.dev` configuration with webpack to compile our application code and add `webpack-hot-middleware` support in our application. Next we serve all get requests to send `../src/index.html` to browser and start out application by listening on port.

----

### Connect it all together in a way that makes sense
Now we have done all the setup it time to connect everything together in a way that will enable us to using a single command to compile, bundle, lint, test, build and serve our application. Previously I used [gulp](http://gulpjs.com/) & [grunt](http://gruntjs.com/) but now I will be using [NPM Scripts](https://docs.npmjs.com/misc/scripts)

#### Setup NPM Script
Using npm scripts to automate our build process is very simple and the best part of it is, it doesn't required any extra dependencies like gulp and grunt. By defining script variable in our `package.json` we can configure npm to start our application.

[package.json](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/package.json)
```json
"scripts": {
    "start": "babel-node bin/server"
}
```

In above line we configure node to use `babel-node` compiler to compile and serve `server.js`.

Let's open the terminal and run our application by using following command.

       npm start -s        
       
This should open our application in default browser.
 
We only serve the application let's add scripts for linting our code and for automate our tests.
[package.json](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/package.json)
```json
"scripts": {
    "start": "babel-node bin/server",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress bin/testSetup.js \"src/**/*.spec.js\"",
    "test:watch": "npm test -- --watch"
}
```

now we can use following commands for linting and watch for any changes

       npm run lint 
       npm run lint:watch

and for testing our application use following commands
    
       npm test 
       npm test:watch
  
In above both commands I have add support for `watch` it will watch files in project and will automate lint or test our code.
 
We have separate scripts for different tasks now connect together via parallel script.

[package.json](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment/blob/master/package.json)
```json
"scripts": {
    "start": "npm-run-all --parallel serve lint:watch test:watch",
    "serve": "babel-node bin/server",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress bin/testSetup.js \"src/**/*.spec.js\"",
    "test:watch": "npm test -- --watch"
  }
```

We modify scripts by adding `serve` command for serve the application and in `start` command we used `npm-run-all` to run multiple command in parallel.

Now if we run 

    npm start -s
  
It will lint, compile, bundle, test and serve our application.


### Summary
We have setup our Dev Environment for React + Redux development which provide rapid feedback, transpiler down ES6 code into ES5 with Babel, bundling code with Webpack, linting our code using ESLint rules, automate testing with mocha and serve application from Express.
In Part2 we will explore React Component and Setup React Router.

