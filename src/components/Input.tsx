import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

import appColors from '../colors';

export default function Input({style, ...props}: TextInputProps) {
  return (
    <TextInput
      style={[inputStyles.input, style]}
      placeholderTextColor={appColors.secondaryText}
      {...props}
    />
  );
}

const inputStyles = StyleSheet.create({
  input: {
    height: 40,
    width: 360,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export {inputStyles};
