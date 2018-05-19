const data = require('./data');
const dom = require('./dom');

const insultMeBro = () => {
  const randomDescriptor1 = Math.floor(Math.random() * 112);
  const randomDescriptor2 = Math.floor(Math.random() * 112);
  const randomNoun = Math.floor(Math.random() * 40);
  const insultString = `${data.getDescriptors()[randomDescriptor1].text} ${data.getDescriptors()[randomDescriptor2].text} ${data.getNouns()[randomNoun].text}`;
  dom(insultString);
};

const initializeEventListener = () => {
  $('#insult-button').on('click', insultMeBro);
};

module.exports = initializeEventListener;
