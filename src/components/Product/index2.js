import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import Products from '../screens/Products';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import Product from '../screens/Product';
import ProductEdition from '../screens/ProductEdition';

const Stack = createStackNavigator();



export default function Routes() {
  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions={ {headerShown: false} }>

        
        
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductEdition" component={ProductEdition} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
