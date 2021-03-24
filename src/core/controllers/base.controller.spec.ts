import { BaseController } from './base.controller';

describe('BaseController', () => {
  describe('response', () => {
    it('should return an object with field error, message, data', async () => {
      const bc = new BaseController();
      const expected = 'welcome to base controller';
      const actual = await bc.response('welcome to base controller');

      expect(actual.error).toBeFalsy();
      expect(actual.message).toBe(expected);
      expect(actual.data).toEqual([]);
    });
  });
});
