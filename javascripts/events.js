const dom = require('./dom.js');

const addEvent = () => {
  $('#insult').on('click', generateInsult);
};

const getDescriptor = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json').done((data) => {
      resolve(data.descriptors);
    }).fail((err) => {
      reject('OMG this happened!: ', err);
    });
  });
};

const getNouns = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json').done((data) => {
      resolve(data.nouns);
    }).fail((err) => {
      reject('OH MAN!: ', err);
    });
  });
};

const generateInsult = () => {
  const insultArray = [];
  getDescriptor().then((descriptions) => {
    const randomDescriptor = Math.floor(Math.random() * descriptions.length);
    insultArray.push(descriptions[randomDescriptor].text);
    return getDescriptor();
  }).then((descript) => {
    const randomDescriptor2 = Math.floor(Math.random() * 112);
    insultArray.push(descript[randomDescriptor2].text);
    return getNouns();
  }).then((nouns) => {
    const randomNoun = Math.floor(Math.random() * nouns.length);
    insultArray.push(nouns[randomNoun].text);
    dom.insultBuilder(insultArray);
  });
};

module.exports = {
  addEvent,
};
