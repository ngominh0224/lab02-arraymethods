const {
  maps,
} = require('./index');

describe('tests functions similar to array operations', () => {
  it('takes an array and doubles it', () => {
    const array = [1, 2, 3, 4, , 5];
    const callback = (item) => item * 2;

    const newArray = maps(array, callback);

    expect(newArray).toEqual([2, 4, 6, 8, , 10]);
  });

});