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

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const {onRegister} = useContext(AuthenticationContext);
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
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={p => setRepeatedPassword(p)}
        />
        <View style={{height: 25}} />
        <AuthButton
          mode="contained"
          onPress={() => onRegister(email, password, repeatedPassword)}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
