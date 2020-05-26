import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { currentUser, signOut } from '../services/auth';
import {
  Container, Text, Button, Header,
} from '../components';
import { theme } from '../constants';

export default function Profile() {
  const user = currentUser();
  const navigation = useNavigation();

  if (!user) {
    return (
      <Container middle center>
        {' '}
        <Text h2 accent bold>Usuário não logado</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Container flexWrap="wrap" row middle style={styles.container}>
        <Image style={styles.image} source={{ height: 100, width: 100, uri: user.photoURL }} />
        <Text h1 style={styles.name}>{user.name}</Text>
        <Text h2 style={styles.email}>{user.email}</Text>
      </Container>
      <Container middle row space="evenly">
        <Button color={theme.colors.gray} style={styles.button} onPress={() => navigation.goBack()}><Text bold white>Voltar</Text></Button>
        <Button color={theme.colors.accent} style={styles.button} onPress={signOut}><Text bold white>Sair</Text></Button>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  image: {
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    marginTop: 50,
    marginBottom: 20,
  },
  email: {
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    width: 100,
    alignSelf: 'center',
  },
});
