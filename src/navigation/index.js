import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';

import Product from '../components/Product/index';
import Products from '../components/Products/index';
import ProductEdition from '../components/ProductEdition/index';


const Stack = createStackNavigator();

export default function Routes() {
  return (

    <NavigationContainer >
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductEdition" component={ProductEdition} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
