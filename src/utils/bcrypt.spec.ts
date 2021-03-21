import { hash, compare } from './bcrypt';

describe('Hashing Bcrypt', () => {
  describe('hash()', () => {
    it('should return an string hash firs 7 character $2b$10$', async () => {
      const actual = await hash('password');
      const expected = '$2b$10$';
      expect(actual.substring(0, 7)).toBe(expected);
    });
  });

  describe('compare()', () => {
    it('should return an boolean and true', async () => {
      const str = 'password';
      const sh = '$2b$10$li3DreYseDNMMFiD5kIfKuzGbSnwXeh6JyQ/eRFZ8fsa633tKCG5K';
      const actual = await compare(str, sh);
      expect(actual).toBeTruthy();
    });

    it('should return an boolean and false', async () => {
      const str = 'password';
      const sh = '$2b$10$li3DreYseDNMMFiD5kIfKuzGbSnwXeh6JyQ/eRFZ8fsa633tKCG5a';
      const actual = await compare(str, sh);
      expect(actual).toBeFalsy();
    });
  });
});
