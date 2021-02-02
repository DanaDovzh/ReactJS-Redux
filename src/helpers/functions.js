const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

function* createIdGenerator(start) {
  let result = start;
  while (true) yield result++;
};


export { getRandomNumber, createIdGenerator }