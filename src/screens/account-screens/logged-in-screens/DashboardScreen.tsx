import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {settingsScreenName} from '../../AccountScreen';
import {
  PageContainer,
  PressableBlockContainer,
} from '../../../components/AppContainers';
import appColors from '../../../colors';
import type {LoggedInAccountScreenStackScreenProps} from '../../../types';

export default function DashboardScreen({
  navigation,
}: LoggedInAccountScreenStackScreenProps) {
  return (
    <PageContainer>
      <PressableBlockContainer
        style={styles.accountInfoContainer}
        onPress={() => navigation.navigate(settingsScreenName)}
        components={
          <>
            <Image
              style={styles.accountAvatar}
              source={require('../../../../assets/images/Sample-Avatar-1.jpg')}
            />
            <View style={styles.accountTextContainer}>
              <Text style={styles.usernameText}>Dreamer</Text>
              <Text style={styles.accountIdText}>ID: dreamer123</Text>
            </View>
          </>
        }
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  accountInfoContainer: {
    height: 160,
  },
  accountAvatar: {
    height: 80,
    width: 80,
    borderRadius: 16,
  },
  accountTextContainer: {
    height: 80,
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  usernameText: {
    marginBottom: 6,
    color: appColors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountIdText: {
    color: appColors.secondaryText,
    fontSize: 14,
  },
});
