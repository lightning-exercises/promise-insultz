const getRandomNum = (min, max) =>
{
  const num = Math.random() * (max - min) + min;
  return Math.round(num);
};

module.exports = getRandomNum;
