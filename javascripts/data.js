let descriptors = [];
let nouns = [];

const getDescriptors = () => {
  return descriptors;
};

const getNouns = () => {
  return nouns;
};

const setDescriptors = (descriptorArray) => {
  descriptors = descriptorArray;
};

const setNouns = (nounArray) => {
  nouns = nounArray;
};

module.exports = { getDescriptors, getNouns, setDescriptors, setNouns, };
