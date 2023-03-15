import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AccountStartScreen from './account-screens/not-logged-in-screens/AccountStartScreen';
import LoginScreen from './account-screens/not-logged-in-screens/LoginScreen';
import RegisterScreen from './account-screens/not-logged-in-screens/RegisterScreen';
import DashboardScreen from './account-screens/logged-in-screens/DashboardScreen';
import SettingsScreen from './account-screens/logged-in-screens/SettingsScreen';
import AccountSettingsScreen from './account-screens/logged-in-screens/setting-screens/AccountSettingsScreen';

const accountStartScreenName = 'AccountStartScreen';
const loginScreenName = 'LoginScreen';
const registerScreenName = 'RegisterScreen';
const dashboardScreenName = 'DashboardScreen';
const settingsScreenName = 'SettingsScreen';
const accountSettingsScreenName = 'AccountSettingsScreen';

const stack = createNativeStackNavigator();

export default function AccountScreen() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const retrieveLoginToken = async () => {
      try {
        const loginToken = await AsyncStorage.getItem('LOGIN_TOKEN');
        setIsLoggedIn(loginToken !== null);
      } catch (e) {
        // Failed to get login token
      }
    };

    retrieveLoginToken();
  });

  return !isLoggedIn ? (
    <stack.Navigator
      initialRouteName={accountStartScreenName}
      screenOptions={{
        headerShown: false,
        contentStyle: {justifyContent: 'center'},
      }}>
      <stack.Screen
        name={accountStartScreenName}
        component={AccountStartScreen}
      />
      <stack.Screen name={loginScreenName} component={LoginScreen} />
      <stack.Screen name={registerScreenName} component={RegisterScreen} />
    </stack.Navigator>
  ) : (
    <stack.Navigator
      initialRouteName={dashboardScreenName}
      screenOptions={{
        headerShown: false,
        contentStyle: {justifyContent: 'center'},
      }}>
      <stack.Screen name={dashboardScreenName} component={DashboardScreen} />
      <stack.Screen name={settingsScreenName} component={SettingsScreen} />
      <stack.Screen
        name={accountSettingsScreenName}
        component={AccountSettingsScreen}
      />
    </stack.Navigator>
  );
}

export {
  accountStartScreenName,
  loginScreenName,
  registerScreenName,
  dashboardScreenName,
  settingsScreenName,
  accountSettingsScreenName,
};
