const dataCall = require('./DataCall');
const dom = require('./dom');

const insultProm = () =>
{
  const insults = dataCall.descJSON().then((desc) =>
  {
    dataCall.nounJSON().then((nouns) =>
    {
      $('#insults').html(dom(desc, nouns));
    });
  });
  return insults;
};

module.exports = insultProm;
