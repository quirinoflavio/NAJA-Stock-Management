import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button } from '../Base';

const actionIcon = require('../../assets/images/actionButton.png');

export default function FloatButton(props) {
  const { handlePress, hide } = props;

  if (hide) return null;

  return (
    <Button
      onPress={() => handlePress()}
      style={styles.floatButton}
    >
      <Image
        style={styles.image}
        source={actionIcon}
      />
    </Button>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
  },
  floatButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
});
