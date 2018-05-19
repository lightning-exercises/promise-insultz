'use strict';
const getDescriptors = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/descriptors.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(`ERROR:`, err);
      });
  });
};

module.exports = getDescriptors;
