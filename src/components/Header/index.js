import React from 'react';
import { StyleSheet, Image, AsyncStorage } from 'react-native';
import { Container, Text, Button } from '../Base';
import { theme } from '../../constants';

const getProfile = async () => {
  let profile;
  try {
    profile = await AsyncStorage.getItem('profile') || 'none';
  } catch (error) {
    console.log(error.message);
  } return profile;
};

export default function Header() {
  const profile = getProfile;

  return (
    <Container flex={false} row center space="between" style={styles.header}>
      <Text h1 bold>
        Home Page
      </Text>
      <Button>
        <Image
          size={theme.sizes.base * 2.7}
          style={styles.avatar}
          source={profile.avatar}
        />
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
});
