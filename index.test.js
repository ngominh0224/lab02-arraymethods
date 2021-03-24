const {
  maps,
  filters
} = require('./index');

describe('tests functions similar to array operations', () => {
  it('takes an array and capitalizes it', () => {
    const array = ['apple', 'banana', 'orange', 'peach'];
    const callback = (item) => item.toUpperCase();

    const newArray = maps(array, callback);

    expect(newArray).toEqual(['APPLE', 'BANANA', 'ORANGE', 'PEACH']);
  });

  it('takes array and callback and returns first index thats true', () => {
    const array = ['Ohio', 'Oregon', 'California', 'Washingtion', 'Idaho'];
    const callback = (item) => {
      if(item.startsWith('O')) return item;
    };
    const newArray = filters(array, callback);

    expect(newArray).toEqual(['Ohio', 'Oregon']);
  });

});