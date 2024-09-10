import { atomWithStorage } from 'jotai/utils';

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  username: string;
}

export const userAtom = atomWithStorage<IUser | null>('user', null);
