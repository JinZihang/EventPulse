import React from 'react';

import CustomButton from './CustomButton';
import type {ButtonProps, AppButtonProps} from '../../types';

export default function AppButton({
  disabled,
  type = 'primary',
  size = 'medium',
  ...props
}: ButtonProps & AppButtonProps) {
  const styles = disabled
    ? typeSpecificButtonStyles.disabled
    : typeSpecificButtonStyles[type];
  const sizeObj = buttonSizes[size];

  return (
    <CustomButton {...styles} {...sizeObj} disabled={disabled} {...props} />
  );
}

const commonButtonStyles: ButtonProps = {
  borderRadius: 4,
  height: 55,
  raiseLevel: 6,
};

const typeSpecificButtonStyles = {
  primary: {
    ...commonButtonStyles,
    backgroundColor: '#1775c8',
    backgroundDarker: '#125a9a',
    backgroundProgress: '#125a9a',
    textColor: '#FFF',
    activityColor: '#b3e5e1',
  },
  secondary: {
    ...commonButtonStyles,
    backgroundColor: '#e9f0f5',
    backgroundDarker: '#0e71c8',
    backgroundActive: '#dae8f3',
    backgroundProgress: '#c8e3f5',
    backgroundPlaceholder: '#1e88e5',
    textColor: '#1e88e5',
    borderWidth: 1,
    borderColor: '#1e88e5',
    activityColor: '#1e88e5',
  },
  anchor: {
    ...commonButtonStyles,
    backgroundColor: '#0e4f88',
    backgroundDarker: '#083156',
    backgroundProgress: '#083156',
    textColor: '#FFF',
    activityColor: '#FFF',
  },
  flat: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundDarker: 'rgba(0, 0, 0, 0)',
    backgroundShadow: 'rgba(0, 0, 0, 0)',
    raiseLevel: 0,
    borderRadius: 0,
  },
  disabled: {
    ...commonButtonStyles,
    backgroundColor: '#DFDFDF',
    backgroundDarker: '#CACACA',
    textColor: '#B6B6B6',
  },
};

const buttonSizes = {
  small: {
    width: 120,
    height: 42,
    textSize: 12,
  },
  medium: {
    width: 200,
    height: 55,
  },
  large: {
    width: 250,
    height: 60,
    textSize: 16,
  },
};
