const getRandomInt = require('./randomizer');

const descriptPromise = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/descriptors.json')
      .done((datas) => {
        const length = datas.descriptors.length;
        const index = getRandomInt(length);
        resolve(datas.descriptors[index].text);
      })
      .fail((err) => {
        console.error(err);
      });
  });
};

module.exports = descriptPromise;
