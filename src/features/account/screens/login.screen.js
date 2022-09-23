import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from '../components/account.styles';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin} = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <View style={{height: 25}} />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={p => setPassword(p)}
        />
        <View style={{height: 25}} />
        <AuthButton mode="contained" onPress={() => onLogin(email, password)}>
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
