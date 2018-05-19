// You should probably write some code here
const descriptPromise = require('./descriptor');
const nounPromise = require('./noun');

$('#insult-btn').click(() => {
  $('#output').text('');
  descriptPromise().then((descript) => {
    $('#output').append(`${descript} `);
    return descriptPromise();
  }).then((descript) => {
    $('#output').append(`${descript} `);
    return nounPromise();
  }).then((noun) => {
    $('#output').append(`${noun} `);
  }).catch((err) => {
    console.error(err);
  });
});
