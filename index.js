const maps = (array, callback) => {
  const newArray = [...array];
  for (let i = 0; i < array.length; i++) {
    if (newArray[i]) newArray[i] = callback(newArray[i]);
  }
  return newArray;
};

const filters = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])) newArray = [...newArray, array[i]];
  }
  return newArray;
};


module.exports = {
  maps,
  filters,
};