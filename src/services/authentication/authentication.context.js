import React, {useState, createContext} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

// the value is what we are going to return as parameters for the children to use
export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // this function takes in the email and password. it's going to allow us to trigger our login function
  const onLogin = (email, password) => {
    setIsLoading(true);
    // this function returns a user after .then
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
