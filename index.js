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

const findIndexes = (array, callback) => {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){ 
    index = i;
    return index;
    };
  };
  return index;
};

module.exports = {
  maps,
  filters,
  findIndexes
};