import { createContext, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {}
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    login: loginHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
