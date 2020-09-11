import { createContext } from 'react';

interface AuthContextState {
  name: string;
}

// Since we typed createContext, it is expecting the name argument. So this trick
// '{} as AuthContext' is for us to initialize with an empty obj. We could already
// pass a name, but if the user is not logged in, we dont want to have nothing there.
const authContext = createContext<AuthContextState>({} as AuthContextState);

export default authContext;
