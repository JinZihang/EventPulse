import React from 'react';
import {Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {accountStartScreenName} from '../../AccountScreen';
import {PageContainer} from '../../../components/AppContainers';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import AppButton from '../../../components/buttons/AppButton';
import appColors from '../../../colors';
import type {NotLoggedInAccountScreenStackScreenProps} from '../../../types';

export default function LoginScreen({
  navigation,
}: NotLoggedInAccountScreenStackScreenProps) {
  const [username, onUsernameChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const [invalidInput, setInvalidInput] = React.useState(false);

  const onForgetPasswordButtonPress = () => {
    return;
  };

  const onLoginButtonPress = async () => {
    if (true) {
      try {
        await AsyncStorage.setItem('LOGIN_TOKEN', 'SampleToken');
        navigation.navigate(accountStartScreenName);
      } catch (e) {
        // Failed to save login token
      }
    } else {
      setInvalidInput(true);
    }
  };
  const renderWarning = () => {
    return invalidInput ? (
      <Text style={styles.warningText}>Invalid username or password.</Text>
    ) : null;
  };

  return (
    <PageContainer style={styles.loginScreenContainer}>
      <Input
        value={username}
        placeholder="Username"
        autoCapitalize="none"
        onChangeText={onUsernameChange}
      />
      <PasswordInput value={password} onChangeText={onPasswordChange} />
      {renderWarning()}
      <AppButton onPress={onForgetPasswordButtonPress}>
        Forget Password
      </AppButton>
      <AppButton onPress={onLoginButtonPress}>Login</AppButton>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    alignSelf: 'center',
    color: appColors.warningText,
  },
});
