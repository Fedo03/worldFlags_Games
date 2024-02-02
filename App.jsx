import React from 'react';

import { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home';
import Play from './screen/play';
import Online from './screen/online';

const Stack = createNativeStackNavigator();



const App = () => {

    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={Home}
       />
        <Stack.Screen 
        name='Play'
        component={Play}
       />
        <Stack.Screen 
        name='Online'
        component={Online}
       />
      </Stack.Navigator>
    </NavigationContainer>
 

  )
}

export default App;