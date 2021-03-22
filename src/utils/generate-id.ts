import { nanoid } from 'nanoid';

export function ID(size?: number) {
  return nanoid(size);
}
