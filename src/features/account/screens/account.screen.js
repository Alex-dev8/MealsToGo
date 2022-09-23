import React from 'react';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';
import {View} from 'react-native';

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          LOGIN
        </AuthButton>
        <View style={{height: 20}} />
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
