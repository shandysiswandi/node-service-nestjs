import { inArray } from './in-array';

describe('InArray Function', () => {
  describe('InArray()', () => {
    it('should return an boolean true', () => {
      const arr = ['1', '2', '3'];
      const actual = inArray(arr, '2');

      expect(actual).toBeTruthy();
    });

    it('should return an boolean false', () => {
      const arr = ['1', '2', '3'];
      const actual = inArray(arr, '4');

      expect(actual).toBeFalsy();
    });
  });
});
