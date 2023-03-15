import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import PostScreen from './screens/PostScreen';
import MessagesScreen from './screens/MessagesScreen';
import AccountScreen from './screens/AccountScreen';
import appColors from './colors';

const homeScreenName = 'Home';
const discoverScreenName = 'Discover';
const postScreenName = 'Post';
const messagesScreenName = 'Messages';
const accountScreenName = 'Account';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeScreenName}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            let rn = route.name;

            if (rn === homeScreenName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === discoverScreenName) {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (rn === postScreenName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (rn === messagesScreenName) {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (rn === accountScreenName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName!} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: appColors.contentBackground,
            padding: 10,
            height: 70,
          },
          tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
          tabBarActiveTintColor: appColors.orange,
          tabBarInactiveTintColor: appColors.blue,
        })}>
        <Tab.Screen name={homeScreenName} component={HomeScreen} />
        <Tab.Screen name={discoverScreenName} component={DiscoverScreen} />
        <Tab.Screen name={postScreenName} component={PostScreen} />
        <Tab.Screen name={messagesScreenName} component={MessagesScreen} />
        <Tab.Screen name={accountScreenName} component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
