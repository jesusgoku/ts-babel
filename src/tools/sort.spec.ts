import { makeSortNumbersFn, makeSortStringsFn } from './sort';

describe('Sort', () => {
  describe('makeSortNumbersFn', () => {
    it('should sort numbers with one and two digits', () => {
      const result = [10, 1, 2].sort(makeSortNumbersFn());
      const expectedResult = [1, 2, 10];

      expect(result).toStrictEqual(expectedResult);
    });

    it('should sort negative numbers', () => {
      const result = [-1, -10, -2].sort(makeSortNumbersFn());
      const expectedResult = [-10, -2, -1];

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('makeSortStringFn', () => {
    it('should sort simple strings', () => {
      const result = ['d', 'a', 'c'].sort(makeSortStringsFn());
      const expectedResult = ['a', 'c', 'd'];

      expect(result).toStrictEqual(expectedResult);
    });

    it('should sort string with special characters', () => {
      const result = ['Camión', 'Camion', 'Camiun'].sort(makeSortStringsFn());
      const expectedResult = ['Camion', 'Camión', 'Camiun'];

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
