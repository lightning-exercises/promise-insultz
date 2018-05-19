'use strict';
const getNouns = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/nouns.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(`ERROR:`, err);
      });
  });
};

module.exports = getNouns;
