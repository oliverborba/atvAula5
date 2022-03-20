import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

const StackNav = createNativeStackNavigator();

export default function MyApp() {

  return (

    <NavigationContainer>

      <StackNav.Navigator>

        <StackNav.Screen component={Tela1} name='Tela1' />
        <StackNav.Screen component={Tela2} name='Tela2' />

      </StackNav.Navigator>

    </NavigationContainer>
  )
}
