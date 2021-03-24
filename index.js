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

const reduces = (array, callback, initialValue) => {
  let accumulated = 0;
  if(initialValue){
    accumulated = initialValue;
  }
  for(let i = 0; i < array.length; i++){
    if(array[i]) accumulated = callback(accumulated, array[i]);
  }
  return accumulated;
};

module.exports = {
  maps,
  filters,
  findIndexes,
  reduces
};