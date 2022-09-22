import React, {useContext} from 'react';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
import {AppNavigator} from './app.navigator';
import {NavigationContainer} from '@react-navigation/native';
import {AccountNavigator} from './account.navigator';

// We are taking the prop from AuthenticationContext, isAuthenticated. If it's true, we load the app, otherwise we load the account navigator for registration and login.
export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
