import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from 'react';
import LanguageScreen from "../screens/LanguageScreen";
import UserTypeScreen from "../screens/UserTypeScreen";
import RegisterationScreen from "../screens/RegisterationScreen";

const Stack = createStackNavigator();
const header= ({ backgroundColor: '#f4511e'},{headerTintColor: '#fff',headerTitleStyle: { fontWeight: 'bold',}});
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={LanguageScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="UserType" component={UserTypeScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="NewUser" component={RegisterationScreen} options={{headerShown: false}}/> 

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;