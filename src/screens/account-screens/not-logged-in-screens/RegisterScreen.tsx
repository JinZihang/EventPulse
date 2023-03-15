import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {accountStartScreenName} from '../../AccountScreen';
import {PageContainer} from '../../../components/AppContainers';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import AppButton from '../../../components/buttons/AppButton';
import appColors from '../../../colors';
import type {NotLoggedInAccountScreenStackScreenProps} from '../../../types';

export default function RegisterScreen({
  navigation,
}: NotLoggedInAccountScreenStackScreenProps) {
  const [username, onUsernameChange] = React.useState('');
  const [passwordInput1, onPasswordInput1Change] = React.useState('');
  const [passwordInput2, onPasswordInput2Change] = React.useState('');
  const [phoneNumber, onPhoneNumberChange] = React.useState('');

  // States for warnings
  const [invalidUsername, setInvalidUsername] = React.useState(false);
  const [usernameOccupied, setUsernameOccupied] = React.useState(false);
  const [differentPasswords, setDifferentPasswords] = React.useState(false);
  const [invalidPhoneNumber, setInvalidPhoneNumber] = React.useState(false);
  const [phoneNumberUsed, setPhoneNumberUsed] = React.useState(false);

  const renderWarningText = (text: string) => {
    return <Text style={styles.warningText}>{text}</Text>;
  };

  // Username
  const onUsernameTextChange = (text: string) => {
    onUsernameChange(text);
    setInvalidUsername(false);
    setUsernameOccupied(false);
  };
  const onUsernameInputBlur = () => {
    if (false) {
      setInvalidUsername(true);
    } else if (false) {
      setUsernameOccupied(true);
    }
  };
  const renderUsernameWarning = () => {
    if (invalidUsername) {
      return renderWarningText('Invalid username.');
    } else if (usernameOccupied) {
      return renderWarningText('Username occupied.');
    } else {
      return null;
    }
  };

  // Password
  const onPassword1TextChange = (text: string) => {
    onPasswordInput1Change(text);
    setDifferentPasswords(false);
  };
  const onPassword2TextChange = (text: string) => {
    onPasswordInput2Change(text);
    setDifferentPasswords(false);
  };
  const onPasswordInputBlur = () => {
    if (
      passwordInput1 !== '' &&
      passwordInput2 !== '' &&
      passwordInput1 !== passwordInput2
    ) {
      setDifferentPasswords(true);
    }
  };
  const renderPasswordWarning = () =>
    differentPasswords ? renderWarningText('Different passwords.') : null;

  // Phone number
  const onPhoneNumberTextChange = (text: string) => {
    onPhoneNumberChange(text);
    setInvalidPhoneNumber(false);
    setPhoneNumberUsed(false);
  };
  const onPhoneNumberInputBlur = () => {
    if (false) {
      setInvalidPhoneNumber(true);
    } else if (false) {
      setPhoneNumberUsed(true);
    }
  };
  const verifyPhoneNumber = () => {};
  const renderPhoneNumberWarning = () => {
    if (invalidPhoneNumber) {
      return renderWarningText('Invalid phone number.');
    } else if (phoneNumberUsed) {
      return renderWarningText('Phone number used.');
    } else {
      return null;
    }
  };

  const onRegisterButtonPressed = () => {
    if (true) {
      navigation.navigate(accountStartScreenName);
    }
  };

  return (
    <PageContainer style={styles.registerScreenContainer}>
      <Input
        value={username}
        placeholder="Username"
        autoCapitalize="none"
        onChangeText={onUsernameTextChange}
        onBlur={onUsernameInputBlur}
      />
      {renderUsernameWarning()}
      <PasswordInput
        value={passwordInput1}
        onChangeText={onPassword1TextChange}
        onBlur={onPasswordInputBlur}
      />
      <PasswordInput
        customPlaceholder={'Confirm Password'}
        value={passwordInput2}
        onChangeText={onPassword2TextChange}
        onBlur={onPasswordInputBlur}
      />
      {renderPasswordWarning()}
      <Input
        value={phoneNumber}
        placeholder="Phone Number"
        autoCapitalize="none"
        onChangeText={onPhoneNumberTextChange}
        onBlur={onPhoneNumberInputBlur}
      />
      {renderPhoneNumberWarning()}
      <AppButton onPress={() => verifyPhoneNumber()}>
        Verify Phone Number
      </AppButton>
      <AppButton onPress={() => onRegisterButtonPressed()}>Register</AppButton>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  registerScreenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    marginLeft: 12,
    color: appColors.warningText,
  },
});
