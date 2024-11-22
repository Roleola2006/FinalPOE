import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import MenuPage from "./screens/MenuPage"; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home page' }}
        />
        <Stack.Screen
          name="MenuPage"
          component={MenuPage} 
          options={{ title: 'Menu Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

