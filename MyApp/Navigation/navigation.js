import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Game from '../../AppModules/Game/View/game';
import UserScreen from '../../AppModules/UserModule/Views/UserScreen';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="GameScreen" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
