import { response } from './response';

describe('Response Function', () => {
  describe('response()', () => {
    it('should return an object with field message and data', async () => {
      const actual = await response('msg', 'data');
      const expected = { message: 'msg', data: 'data' };

      expect(actual?.message).toBe(expected.message);
      expect(actual?.data).toBe(expected.data);
    });
  });
});
