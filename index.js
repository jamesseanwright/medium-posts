'use strict';

const medium = require('mediumexporter');
const urls = require('./urls.json');

Promise.all(
  urls.map(url => medium.getPost(url, {
    output: 'posts',
  })),
);
