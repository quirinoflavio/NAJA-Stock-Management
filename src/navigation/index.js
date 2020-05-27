import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import '../services/api';
import { auth } from 'firebase';

import Category from '../screens/Category';
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Profile from '../screens/Profile';

import Product from '../components/Product/index';
import Products from '../components/Products/index';
import ProductEdition from '../components/ProductEdition/index';


const Stack = createStackNavigator();

export default function Routes() {
  const [loggedIn, setLoggedIn] = useState(false);
  auth().onAuthStateChanged((user) => setLoggedIn(!!user));
  return (


    <NavigationContainer>
      <Stack.Navigator>
        {(!loggedIn
          ? (
            <>
              <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </>
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
