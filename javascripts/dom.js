const printToDom = (stringToPrint) => {
  $('#insult-container').html(stringToPrint);
};

const insultBuilder = (arrayOInsults) => {
  let stringToPrint = '';
  stringToPrint += `<h1>You `;
  arrayOInsults.forEach((insult) => {
    stringToPrint += `${insult} `;
  });
  stringToPrint = $.trim(stringToPrint);
  console.error('trimmed: ', stringToPrint);
  stringToPrint += `!</h1>`;
  printToDom(stringToPrint);
};

module.exports = {
  insultBuilder,
};
