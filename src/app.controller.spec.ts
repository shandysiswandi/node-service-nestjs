import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {
    appController = new AppController();
  });

  describe('root', () => {
    it('should return message welcome to root', async () => {
      const actual = await appController.root();

      expect(actual.error).toBeFalsy();
      expect(actual.message).toEqual('welcome to root');
      expect(actual.data).toEqual([]);
    });
  });

  describe('health', () => {
    it('should return message this service is healthy', async () => {
      const actual = await appController.root();

      expect(actual.error).toBeFalsy();
      expect(actual.message).toEqual('welcome to root');
    });
  });
});
