const random = require('./genertator');

const writeInsults = (description, noun) =>
{
  const burn = random(0, 111);
  const burn3 = random(0, 111);
  const burn2 = random(0, 40);
  let domString = '';
  domString +=  `<h1>You are a ${description[burn].text} ${description[burn3].text} ${noun[burn2].text}</h1>`;
  return domString;
};

module.exports = writeInsults;
