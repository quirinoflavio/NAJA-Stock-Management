import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { decode, encode } from 'base-64'; // To fix a bug with atob

import Routes from './src/navigation';

if (!global.btoa) { global.btoa = encode; } // fix atob bug
if (!global.atob) { global.atob = decode; } // fix atob bug


export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
