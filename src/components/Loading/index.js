import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from 'firebase';
//import { Container, Text } from '../components';

import {DefaultTheme, Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';



const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5DEB3',
    //accent:  "#F8F8FF",
   // secundary: '#4B0082',
    backgroundColor: "#F5DEB3",
    alignContent: true,
    center: true,
    middle: true,
    
  },
};


export default function Loading() {
  const navigation = useNavigation();

  function checkIfLoggedIn() {
    auth().onAuthStateChanged(
      (user) => navigation.navigate(user ? 'Home' : 'Login'),
    );
  }

  useEffect(() => checkIfLoggedIn());

  return (
    <PaperProvider theme={theme} >    
    <ActivityIndicator animating={true} size="large" />
    </PaperProvider>
  );
}
