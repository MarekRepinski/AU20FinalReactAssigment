import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './src/context/AuthContext';
import { StackedScreens } from './src/helpers/types';
import { EditItemScreen } from './src/screens/EditItemScreen';
import { ItemScreen } from './src/screens/ItemScreen';
import LoginScreen from './src/screens/LoginScreen';
import { initFirebase } from './src/services/firebaseService';

export default function App() {
  initFirebase();
  return (
    <AuthContextProvider>
      <MainNavigator />
    </AuthContextProvider>
  );
}

export const MainNavigator = () => {
  const StackNavigator = createNativeStackNavigator<StackedScreens>();
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        {!authContext?.isUserSignedIn && (
            <StackNavigator.Screen name='ItemScreen' component={ItemScreen} options={{ headerShown: false }} />
            // <StackNavigator.Screen name='LoginScreen' component={LoginScreen} />
        )}
        {authContext?.isUserSignedIn && (
          <>
            <StackNavigator.Screen name='ItemScreen' component={ItemScreen} options={{ headerShown: false }} />
            <StackNavigator.Screen name='EditItemScreen' component={EditItemScreen} options={{ headerShown: false }} />
          </>
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

