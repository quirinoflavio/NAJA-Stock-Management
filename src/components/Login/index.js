import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


import {DefaultTheme, Provider as PaperProvider, Text, Button, Avatar, StyleSheet } from 'react-native-paper';



import { signInWithGoogleAsync } from '../services/auth';



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


export default function Login() {
  const entrar = signInWithGoogleAsync();
  return (
    <PaperProvider theme={theme} middle>    
   <Button  icon="google" mode="outlined" style={{marginTop: 240, justifyContent: 'center',
      alignItems: 'center'}} onPress={signInWithGoogleAsync()}>
   Login with Google
   </Button>
 </PaperProvider>
  );


}
  
