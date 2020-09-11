import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface AuthData {
  token: string;
  // This user: Record<string, unknown> is to use in place of user: object
  user: Record<string, unknown>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: Record<string, unknown>;
  signIn(credentials: SignInCredentials): Promise<void>;
}

// Since we typed createContext, it is expecting the name argument. So this trick
// '{} as AuthContext' is for us to initialize with an empty obj. We could already
// pass a name, but if the user is not logged in, we dont want to have nothing there.
const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) return { token, user: JSON.parse(user) };

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
