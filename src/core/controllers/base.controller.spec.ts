import { BaseController } from './base.controller';

describe('BaseController', () => {
  describe('response', () => {
    it('should return an object with field error, message, data', async () => {
      const bc = new BaseController();
      const actual = await bc.response('welcome to base controller');

      expect(actual.error).toBeFalsy();
      expect(actual.message).toBe('welcome to base controller');
      expect(actual.data).toEqual([]);
    });
  });
});
