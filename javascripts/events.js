const dataJS = require('./data.js');

const addEvent = () => {
  $('#insult-btn').on('click', () => {
    $('#insult-div').html(generateInsult());
  });
};

const generateInsult = () => {
  const descriptors = dataJS.getDescriptors();
  const nouns = dataJS.getNouns();
  const firstDescription = descriptors[randomNumber(descriptors.length)].text;
  const secondDescription = descriptors[randomNumber(descriptors.length)].text;
  const theNoun = nouns[randomNumber(nouns.length)].text;
  return `${firstDescription} ${secondDescription} ${theNoun}`;
};

const randomNumber = (arrLength) => {
  return Math.floor(Math.random() * (arrLength + 1));
};

module.exports = addEvent;
