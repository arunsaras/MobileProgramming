import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Src/pages/Home';
import {enableScreens} from 'react-native-screens';
import Screens from './Src/pages/Screens';
import UseCase2 from './Src/pages/UseCase';
enableScreens(true);
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="screen" component={Screens} />
        <Stack.Screen name='useCase' component={UseCase2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
