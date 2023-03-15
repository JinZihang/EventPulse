import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  PressableProps,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type NotLoggedInAccountScreenStackParamList = {
  AccountStartScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
};
export type NotLoggedInAccountScreenStackScreenProps =
  NativeStackScreenProps<NotLoggedInAccountScreenStackParamList>;

type LoggedInAccountScreenStackParamList = {
  DashboardScreen: undefined;
  SettingsScreen: undefined;
  AccountSettingsScreen: undefined;
};
export type LoggedInAccountScreenStackScreenProps =
  NativeStackScreenProps<LoggedInAccountScreenStackParamList>;

export type ButtonProps = {
  activityColor?: string;
  activeOpacity?: number;
  animatedPlaceholder?: boolean;
  backgroundActive?: string;
  backgroundColor?: string;
  backgroundDarker?: string;
  backgroundPlaceholder?: string;
  backgroundProgress?: string;
  backgroundShadow?: string;
  borderColor?: string;
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  debouncedPressTime?: number;
  borderLeftBottomRadius?: number;
  borderWidth?: number;
  progressLoadingTime?: number;
  disabled?: boolean;
  height?: number;
  hitSlop?: PressableProps['hitSlop'];
  paddingHorizontal?: number;
  paddingTop?: number;
  progress?: boolean;
  before?: ReactNode;
  dangerouslySetPressableProps?: PressableProps;
  after?: ReactNode;
  paddingBottom?: number;
  raiseLevel?: number;
  springRelease?: boolean;
  stretch?: boolean;
  style?: any;
  textFontFamily?: string;
  textColor?: string;
  textLineHeight?: number;
  textSize?: number;
  width?: number | null;
  children?: string | ReactNode;
  onPress?: (callback?: () => void) => void;
  onLongPress?: PressableProps['onLongPress'];
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onPressedIn?: () => void;
  onPressedOut?: () => void;
  onProgressStart?: () => void;
  onProgressEnd?: () => void;
};

export type ButtonPlaceholderProps = {
  animated?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type AppButtonProps = {
  type?: 'primary' | 'secondary' | 'anchor' | 'flat';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

export type ButtonStyleProps = {
  backgroundActive?: string;
  backgroundColor?: string;
  backgroundDarker?: string;
  backgroundPlaceholder?: string;
  backgroundProgress?: string;
  backgroundShadow?: string;
  borderColor?: string;
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderWidth?: number;
  height: number;
  paddingHorizontal: number;
  paddingTop: number;
  paddingBottom: number;
  raiseLevel: number;
  stretch?: boolean;
  textFontFamily?: string;
  textColor?: string;
  textLineHeight?: number;
  textSize?: number;
  width?: number | null;
  stateWidth?: number | null;
};

export interface PasswordInputProps extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  customPlaceholder?: string;
}

export interface PressableBlockContainerProps extends PressableProps {
  components?: any;
}

export interface PressableSettingContainerProps extends PressableProps {
  iconName: string;
  description: string;
}
