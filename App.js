import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DrawerNavigator} from "./src/navigation/DrawerNavigator"


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName='drawer' screenOptions={{headerShown:false}}>
              {/* TODO logia de login */}
              <Stack.Screen name="drawer" component={DrawerNavigator} />
                
            </Stack.Navigator>
      </NavigationContainer>
    );
  }

