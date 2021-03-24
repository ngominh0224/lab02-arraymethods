const maps = (array, callback) => {
  const newArray = [...array];
  for(let i = 0; i < array.length; i++){
    if(newArray[i]) newArray[i] = callback(newArray[i]);
  }
  return newArray;
};

module.exports = {
  maps,
};