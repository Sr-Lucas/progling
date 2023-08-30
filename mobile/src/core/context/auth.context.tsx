import { router, useSegments } from 'expo-router';
import React from 'react';
import { SignInDTO, Student } from '../types/user.types';
import { Auth } from '../types/auth.types';
import { useAuthStore } from '../store/auth/auth.store';

export type AuthContextType = {
  signIn: ({}: SignInDTO) => Promise<void>;
  signOut: () => void;
  user?: Student | null;
  token?: string | null;
};

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext<AuthContextType>(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user?: Student | null) {
  const segments = useSegments();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/(auth)/sign-in');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/(tabs)/');
    }
  }, [user, segments]);
}

type Props = {
  children: React.ReactNode;
};

export function AuthProvider(props: Props) {
  const { signIn, logOut, token, user } = useAuthStore();

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({ email, password }: SignInDTO) => {
          await signIn({
            email,
            password,
          });
        },
        signOut: () => logOut(),
        user,
        token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
