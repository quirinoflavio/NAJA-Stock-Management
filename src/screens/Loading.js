import React from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { auth } from 'firebase';
import { Container, Text } from '../components';
import '../services/api';


export default function Loading() {
  const navigation = useNavigation();

  function checkIfLoggedIn() {
    auth().onAuthStateChanged(
      (user) => {
        if (!user) navigation.navigate('Login');
      },
    );
  }

  useFocusEffect(() => checkIfLoggedIn(), []);

  return (
    <Container middle center>
      <Text h1 bold>Carregando...</Text>
    </Container>
  );
}
