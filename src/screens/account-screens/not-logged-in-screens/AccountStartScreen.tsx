import React from 'react';
import {StyleSheet} from 'react-native';

import {loginScreenName, registerScreenName} from '../../AccountScreen';
import {PageContainer} from '../../../components/AppContainers';
import AppButton from '../../../components/buttons/AppButton';
import type {NotLoggedInAccountScreenStackScreenProps} from '../../../types';

export default function AccountStartScreen({
  navigation,
}: NotLoggedInAccountScreenStackScreenProps) {
  return (
    <PageContainer style={styles.accountStartScreenContainer}>
      <AppButton
        style={styles.loginButton}
        onPress={() => navigation.navigate(loginScreenName)}>
        Login
      </AppButton>
      <AppButton onPress={() => navigation.navigate(registerScreenName)}>
        Register
      </AppButton>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  accountStartScreenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginBottom: 12,
  },
});
