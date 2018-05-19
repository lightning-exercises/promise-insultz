'use strict';
const descriptors = require('./descriptors.js');
const nouns = require('./nouns.js');
const dataJS = require('./data.js');
const addEvent = require('./events.js');

const startApp = () => {
  return Promise.all([descriptors(), nouns(),]).then(data => {
    dataJS.setDescriptors(data[0]);
    dataJS.setNouns(data[1]);
    addEvent();
  }).catch(console.error.bind(console));
};

startApp();
