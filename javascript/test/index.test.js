require("../index");

describe("Custom function", () => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('Map function', () => {
    const result = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

    const squre = (number) => number * number;

    expect(array.myMap(squre)).toEqual(result);
  });

  test('Filter funtion', () => {
    const result = [2, 4, 6, 8, 10];

    const evenFinder = (t) => t % 2 === 0;

    expect(array.myFilter(evenFinder)).toEqual(result);
  })

  test('Reduce function', () => {
    const result = 55;

    const sumAll = (currentArrayElem, result) => currentArrayElem + result;

    expect(array.myReduce(sumAll, 0)).toBe(result);
  })

  test('ForEach function', () => {
    const result = [];

    array.forEach((number, idx) => {
      result.push(number);
      expect(number).toBe(array[idx]);
    })

    expect(result).toEqual(array);
  })

})


