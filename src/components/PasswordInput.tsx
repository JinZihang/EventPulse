import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Input, {inputStyles} from './Input';
import appColors from '../colors';
import type {PasswordInputProps} from '../types';

export default function PasswordInput({
  style,
  customPlaceholder,
  ...props
}: PasswordInputProps) {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <View style={[inputStyles.input, styles.passwordInputContainer, style]}>
      <Input
        style={styles.passwordInput}
        placeholder={customPlaceholder || 'Password'}
        placeholderTextColor={appColors.secondaryText}
        autoCapitalize="none"
        secureTextEntry={!isShowingPassword}
        {...props}
      />
      <Ionicons
        name={isShowingPassword ? 'eye' : 'eye-off'}
        style={styles.passwordToggle}
        size={25}
        color={appColors.text}
        onPress={() => setIsShowingPassword(!isShowingPassword)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passwordInputContainer: {
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    margin: 0,
    borderWidth: 0,
  },
  passwordToggle: {
    marginLeft: 2,
    marginRight: 12,
  },
});
