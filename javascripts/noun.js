const getRandomInt = require('./randomizer');

const nounPromise = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/nouns.json')
      .done((datas) => {
        const length = datas.nouns.length;
        const index = getRandomInt(length);
        resolve(datas.nouns[index].text);
      })
      .fail((err) => {
        console.error(err);
      });
  });
};

module.exports = nounPromise;
