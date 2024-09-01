// mobile-app/src/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './contexts/AuthContext';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';


const Stack = createStackNavigator();

function App() {
    return (
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    );
}

export default App;
