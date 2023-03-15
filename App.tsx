import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import MainScreen from './src/MainScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
});
