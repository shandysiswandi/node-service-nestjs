import ID from './generate-id';

describe('Generate ID', () => {
  describe('ID()', () => {
    it('should return an string with length 5', async () => {
      const actual = ID(5);
      const expected = 5;

      expect(actual.length).toBe(expected);
    });

    it('should return an string with length 10', async () => {
      const actual = ID(10);
      const expected = 10;

      expect(actual.length).toBe(expected);
    });

    it('should return an string with length 21 (default)', async () => {
      const actual = ID();
      const expected = 21;

      expect(actual.length).toBe(expected);
    });
  });
});
