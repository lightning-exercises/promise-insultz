const loadDescriptors = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/descriptors.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject('error, dang!', error);
      });
  });
};

module.exports = loadDescriptors;
