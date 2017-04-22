const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const app = express();

const compiler = webpack(config);
app.use(webpackDevMiddleWare(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleWare(compiler));
app.use(express.static('./build'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./src/index.html'));
});

const port = 3000;

app.listen(port, error => {
  if (error) throw error;
  /* eslint-disable no-console */
  console.log('Express server listening on port', port);
});
