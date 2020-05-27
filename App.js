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
