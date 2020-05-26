import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { currentUser } from '../../services/auth';
import { Container, Text, Button } from '../Base';
import { theme } from '../../constants';

function getProfile() {
  return currentUser();
}
console.log(Constants.statusBarHeight);

export default function Header() {
  const profile = getProfile();
  const navitation = useNavigation();
  return (
    <Container flex={false} row center space="between" style={styles.header}>
      <Text h2 bold>
        Categorias
      </Text>
      <Button style={styles.button} onPress={() => navitation.navigate('Profile')}>
        <Image
          size={theme.sizes.base * 2.7}
          style={styles.avatar}
          source={{ uri: profile.photoURL }}
        />
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    maxHeight: 60,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: Constants.statusBarHeight,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'transparent',
  },
});
