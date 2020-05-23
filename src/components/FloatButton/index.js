import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button } from '../Base';

const actionIcon = require('../../assets/images/actionButton.png');

export default function FloatButton(props) {
  const { handlePress } = props;

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
    height: 80,
    width: 80,
  },
  floatButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    borderRadius: 50,
  },
});
