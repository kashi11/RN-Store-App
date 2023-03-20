import {User} from 'utils.ts/types';
import {create} from 'zustand';

type AuthStore = {
  user: User;
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
  setUser: (user: User) => void;
  resetUser: () => void;
  resetAuth: () => void;
};

const userInitialState: User = {
  username: '',
  email: '',
};

export const useAuthStore = create<AuthStore>(set => ({
  token: '',
  user: userInitialState,
  setToken: (token: string) =>
    set(() => ({
      token,
    })),

  removeToken: () => set(() => ({token: ''})),
  setUser: (user: User) => set(() => ({user})),
  resetUser: () => set({user: userInitialState}),
  resetAuth: () => {
    set({token: '', user: userInitialState});
  },
}));
