import { nanoid } from 'nanoid';

function ID(size?: number) {
  return nanoid(size);
}

export default ID;
