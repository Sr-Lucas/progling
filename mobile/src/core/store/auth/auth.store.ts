import { SignUpDTO, Student } from '@/core/types/user.types';
import { combine, createJSONStorage, persist } from 'zustand/middleware';
import { AuthState, IAuthStore } from './auth-store.types';
import { create } from 'zustand';
import { authApi } from '@/core/api';
import { zustandMMKVStorage } from '../../adapters/mmkv.adapter';

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isLoading: false,
};

const authStore = persist<IAuthStore>(
  (set) => ({
    ...initialState,
    signIn: async ({ email, password }) => {
      try {
        set({ isLoading: true });
        const auth = await authApi.signIn({ email, password });
        set({ token: auth.accessToken, user: auth.user, isLoading: false });
      } finally {
        set({ isLoading: false });
      }
    },
    signUp: async ({ email, name, password }: SignUpDTO) => {
      try {
        set({ isLoading: true });
        const auth = await authApi.signUp({
          email,
          name,
          password,
        });
        set({ user: auth.user, token: auth.accessToken, isLoading: false });
      } finally {
        set({ isLoading: false });
      }
    },
    setUser(user: Student) {
      set({ user });
    },
    setToken(token: string) {
      set({ token });
    },
    logOut() {
      set(initialState);
    },
  }),
  {
    name: 'auth-storage',
    storage: createJSONStorage(() => zustandMMKVStorage),
  },
);

export const useAuthStore = create<IAuthStore>()(authStore);
