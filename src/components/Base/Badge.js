import React from 'react';
import { StyleSheet } from 'react-native';

import Container from './Container';
import { theme } from '../../constants';

export default function Badge(props1) {
  const {
    children, style, size, color, ...props
  } = props1;

  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);

  return (
    <Container
      flex={false}
      middle
      center
      color={color}
      style={badgeStyles}
      {...props}
    >
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  },
});
