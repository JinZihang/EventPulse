import React from 'react';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {dashboardScreenName} from '../../../AccountScreen';
import {PageContainer} from '../../../../components/AppContainers';
import AppButton from '../../../../components/buttons/AppButton';
import type {LoggedInAccountScreenStackScreenProps} from '../../../../types';

export default function AccountSettingsScreen({
  navigation,
}: LoggedInAccountScreenStackScreenProps) {
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('LOGIN_TOKEN');
      navigation.navigate(dashboardScreenName);
    } catch (e) {
      // Failed to remove login token
    }
  };

  return (
    <PageContainer style={styles.accountSettingsScreenContainer}>
      <AppButton style={styles.deleteAccountButton}>Delete Account</AppButton>
      <AppButton onPress={() => logOut()}>Logout</AppButton>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  accountSettingsScreenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAccountButton: {
    marginBottom: 12,
  },
});
