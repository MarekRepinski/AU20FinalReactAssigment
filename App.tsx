import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StackedScreens } from './src/helpers/types';
import { EditItemScreen } from './src/screens/EditItemScreen';
import { ItemScreen } from './src/screens/ItemScreen';

export default function App() {
  return (
    <MainNavigator />
  );
}

export const MainNavigator = () => {
  const StackNavigator = createNativeStackNavigator<StackedScreens>();
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
          <StackNavigator.Screen name='ItemScreen' component={ItemScreen} options={{ headerShown: false }} />
          <StackNavigator.Screen name='EditItemScreen' component={EditItemScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

