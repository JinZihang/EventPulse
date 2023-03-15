import React, {useRef, useState, useEffect} from 'react';
import {View, Animated} from 'react-native';

import {animateLoop} from './buttonAnimations';
import {styles} from './buttonStyles';
import {ButtonPlaceholderProps} from '../../types';

export default function ButtonPlaceholder({
  animated,
  style,
}: ButtonPlaceholderProps) {
  const animating = useRef(false);
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (width > 0 && animating.current === false && animated === true) {
      animating.current = true;
      animateLoop({
        variable: animatedValue,
        toValue: 1,
      });
    }
  }, [animated, animatedValue, width]);

  return (
    <View
      style={[styles.container__placeholder, style]}
      onLayout={event => {
        setWidth(event.nativeEvent.layout.width);
      }}>
      {animated === true && (
        <Animated.View
          style={[
            style,
            styles.container__placeholder__bar,
            {
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 0.2, 0.5, 0.7, 1],
                    outputRange: [
                      width * -1,
                      width * -1,
                      width,
                      width,
                      width * -1,
                    ],
                  }),
                },
              ],
            },
          ]}
        />
      )}
    </View>
  );
}
