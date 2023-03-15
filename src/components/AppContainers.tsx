import React from 'react';
import {View, Pressable, ViewProps, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import appColors from '../colors';
import type {
  PressableBlockContainerProps,
  PressableSettingContainerProps,
} from '../types';

const PageContainer = ({style, ...props}: ViewProps) => {
  return <View style={[styles.pageContainer, style]} {...props} />;
};

const PressableBlockContainer = ({
  style,
  components,
  ...props
}: PressableBlockContainerProps) => {
  return (
    <Pressable
      // @ts-ignore, the styles created using StyleSheet.create are not recognized correctly
      style={({pressed}) => [
        styles.blockContainer,
        pressed ? styles.blockContainerPressed : styles.blockContainerUnpressed,
        style,
      ]}
      {...props}>
      {components}
      <Text style={styles.arrowText}>{'>'}</Text>
    </Pressable>
  );
};

const PressableSettingContainer = ({
  iconName,
  description,
  ...props
}: PressableSettingContainerProps) => {
  return (
    <PressableBlockContainer
      components={
        <>
          <Ionicons name={iconName} size={25} color={appColors.text} />
          <Text style={styles.settingDescription}>{description}</Text>
        </>
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: appColors.pageBackground,
    flex: 1,
    flexDirection: 'column',
  },
  blockContainer: {
    marginBottom: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockContainerUnpressed: {
    backgroundColor: appColors.contentBackground,
  },
  blockContainerPressed: {
    backgroundColor: appColors.secondaryContentBackground,
  },
  settingDescription: {
    marginLeft: 16,
    color: appColors.text,
    fontSize: 14,
  },
  arrowText: {
    marginLeft: 'auto',
    color: appColors.text,
    fontSize: 18,
  },
});

export {PageContainer, PressableBlockContainer, PressableSettingContainer};
