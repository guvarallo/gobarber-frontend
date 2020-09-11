import React from 'react';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer/index';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
