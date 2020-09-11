import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

// Since we typed createContext, it is expecting the name argument. So this trick
// '{} as AuthContext' is for us to initialize with an empty obj. We could already
// pass a name, but if the user is not logged in, we dont want to have nothing there.
export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Gus', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
