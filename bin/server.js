/**
 * Created by asimz on 12/06/2016.
 */
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
