import React from 'react';
import { StyleSheet } from 'react-native';

import Container from './Container';
import { theme } from '../../constants';

export default function Card(props1) {
  const {
    color, style, children, ...props
  } = props1;
  const cardStyles = [styles.card, style];

  return (
    <Container
      color={color || theme.colors.white}
      style={cardStyles}
      {...props}
    >
      {children}
    </Container>
  );
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
});
