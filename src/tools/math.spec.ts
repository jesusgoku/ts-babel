import { add } from './math';

describe('Math', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('should add several numbers', () => {
      expect(add(1, 2, 3)).toBe(6);
    });

    it('should add negative numbers', () => {
      expect(add(-1, -2, -3, -4)).toBe(-10);
    });
  });
});
