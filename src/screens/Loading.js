import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from 'firebase';
import { Container, Text } from '../components';

export default function Loading() {
  const navigation = useNavigation();

  function checkIfLoggedIn() {
    auth().onAuthStateChanged(
      (user) => navigation.navigate(user ? 'Home' : 'Login'),
    );
  }

  useEffect(() => checkIfLoggedIn());

  return (
    <Container middle center>
      <Text h1 bold>Carregando...</Text>
    </Container>
  );
}
