import { SignUpDTO, Student } from '@/core/types/user.types';
import { combine, createJSONStorage, persist } from 'zustand/middleware';
import { AuthState, IAuthStore } from './auth-store.types';
import { create } from 'zustand';
import { authApi } from '@/core/api';
import { zustandMMKVStorage } from '../../adapters/mmkv.adapter';
import { ProgrammingLanguage } from '@/core/types/programming-language.types';

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isLoading: false,
  programmingLanguage: null,
};

const authStore = persist<IAuthStore>(
  (set, get) => ({
    ...initialState,
    setProgrammingLanguage(language: ProgrammingLanguage) {
      set({ programmingLanguage: language });
    },
    signIn: async ({ email, password }) => {
      try {
        set({ isLoading: true });
        const auth = await authApi.signIn({ email, password });
        set({
          token: auth.accessToken,
          refreshToken: auth.refreshToken,
          user: auth.user,
          isLoading: false,
        });
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
        set({
          user: auth.user,
          token: auth.accessToken,
          refreshToken: auth.refreshToken,
          isLoading: false,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    refreshAccessToken: async () => {
      try {
        set({ isLoading: true });
        const refresh = await authApi.refreshToken(get().refreshToken ?? '');
        set({
          token: refresh.accessToken,
          refreshToken: refresh.refreshToken,
          isLoading: false,
        });
      } catch (e) {
        get().logOut();
      } finally {
        set({ isLoading: false });
      }
    },
    getMe: async () => {
      try {
        set({ isLoading: true });
        const user = await authApi.getMe();
        set({ user, isLoading: false });

        return user;
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
