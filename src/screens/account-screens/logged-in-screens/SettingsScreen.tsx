import React from 'react';

import {accountSettingsScreenName} from '../../AccountScreen';
import {
  PageContainer,
  PressableSettingContainer,
} from '../../../components/AppContainers';
import type {LoggedInAccountScreenStackScreenProps} from '../../../types';

export default function SettingsScreen({
  navigation,
}: LoggedInAccountScreenStackScreenProps) {
  return (
    <PageContainer>
      <PressableSettingContainer
        iconName="person-outline"
        description="Account Settings"
        onPress={() => navigation.navigate(accountSettingsScreenName)}
      />
    </PageContainer>
  );
}
