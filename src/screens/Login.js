import React, {Component} from 'react';

import {DefaultTheme, Provider as PaperProvider, Text, Button, Avatar, StyleSheet } from 'react-native-paper';

class Login extends Component {
    render(){
      return (
        <PaperProvider theme={theme}>
           <Avatar.Icon size={60} color="#ffffff"  icon="google" />
           
          <Button icon="google" color="#0AC4BA" mode="outlined" onPress={() => console.log('Pressed')}>
          Login with Google
          </Button>
        </PaperProvider>
      )
    }
  
  };
  
  
  
  export default Login