<<<<<<< HEAD
 
import React, {Component, StyleSheet} from 'react';
 
import {DefaultTheme, Provider as PaperProvider, Text, Button, Avatar } from 'react-native-paper';
 
//import Login from '../src/screens/Login'
 
 
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0AC4BA',
    accent:  "#F3534A",
    secundary: '#2BDA8E',
    backgroundColor: "#F3534A"
    
  },
};
 
class App extends Component {

  render(){
    return (
      
      <PaperProvider theme={theme} backgroundColor= "#0AC4BA">

         <Avatar.Icon size={60} 
         style={{height: 200, marginBottom: 100,  marginTop: 100, marginLeft: 180, }} 
         color="#ffffff"  
         icon="google" />
         
        <Button icon="google" 
        style={{ alignItems: "center", justifyContent: "center", display: "flex",}} 
        color="#0AC4BA" 
        mode="outlined" 
        onPress={() => console.log('Pressed')}>
        Login with Google
        </Button>
      </PaperProvider>
      
    )
  }
 
};
 

 
export default App
 
 
 



=======
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { decode, encode } from 'base-64'; // To fix a bug with atob
import { theme } from './src/constants';
import Routes from './src/navigation';

if (!global.btoa) { global.btoa = encode; } // fix atob bug
if (!global.atob) { global.atob = decode; } // fix atob bug

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    tertiary: theme.colors.tertiary,
    accent: theme.colors.accent,
  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <Routes />
    </PaperProvider>
  );
}
>>>>>>> 595caccb7facd3698908415d924993982cf2c594
