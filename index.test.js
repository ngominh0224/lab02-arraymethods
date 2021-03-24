const { maps, filters, findIndexes, reduces, every} = require('./index');

describe('tests functions similar to array operations', () => {
  it('takes an array and capitalizes it', () => {
    const array = ['apple', 'banana', 'orange', 'peach'];
    const callback = (item) => item.toUpperCase();

    const newArray = maps(array, callback);

    expect(newArray).toEqual(['APPLE', 'BANANA', 'ORANGE', 'PEACH']);
  });

  it('takes array and callback and returns first index thats true', () => {
    const array = ['Ohio', 'Oregon', 'California', 'Washington', 'Idaho'];
    const callback = (item) => {
      if(item.startsWith('O')) return item;
    };
    const newArray = filters(array, callback);

    expect(newArray).toEqual(['Ohio', 'Oregon']);
  });

  it('takes array and callback and returns index of first true item', () => {
    const array = ['Ohio', 'Oregon', 'California', 'Washington', 'Idaho'];
    const callback = (item) => {
      if (item.startsWith('C')) return item;
    };
    const newArray = findIndexes(array, callback);

    expect(newArray).toEqual(2);
  });

  it('takes array and callback and returns accumulator', () => {
    const array = [2, 4, 6, , 8];
    const callback = (accumulator, item) => {
      return accumulator + item;
    };
    const newArray = reduces(array, callback, 4);

    expect(newArray).toEqual(24);
  });

  it('takes array and callback and returns true if all are true', () => {
    const array = ['flower', 'rock', 'tree', 'cloud', 'field'];
    const callback = (item) => item.startsWith('f');
    const newArray = every(array, callback);

    expect(newArray).toBeFalsy();
  });

  it('takes array of numbers and callback and returns true if all are true', () => {
    const array = [1, 2, 3, 4, 4];
    const callback = (item) => typeof item === 'number';
    const newArray = every(array, callback);

    expect(newArray).toBeTruthy();
  });
});