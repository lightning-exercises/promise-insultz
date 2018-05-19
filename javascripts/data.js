'use strict';
let nouns = [];
let descriptors = [];

const getDescriptors = () => descriptors;

const getNouns = () => nouns;

const setDescriptors = (array) => descriptors = array.descriptors;

const setNouns = (array) => nouns = array.nouns;

module.exports = {
  setDescriptors,
  setNouns,
  getDescriptors,
  getNouns,
};
