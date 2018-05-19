const descJSON = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/descriptors.json')
      .done((data) =>
      {
        resolve(data.descriptors);
      })
      .fail((err) =>
      {
        reject('error', err);
      });
  });
};

const nounJSON = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/nouns.json')
      .done((data) =>
      {
        resolve(data.nouns);
      })
      .fail((err) =>
      {
        reject('error', err);
      });
  });
};

module.exports =
{
  descJSON,
  nounJSON,
};
