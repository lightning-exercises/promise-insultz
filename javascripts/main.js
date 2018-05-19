const data = require('./data');
const promise = require('./promise');
const event = require('./event');

const initializer = () => {
  Promise.all([promise('/db/descriptors.json'), promise('/db/nouns.json'),])
    .catch(error => console.error(error))
    .then(resultsArray => {
      data.setDescriptors(resultsArray[0].descriptors);
      data.setNouns(resultsArray[1].nouns);
      event();
    });
};

initializer();
