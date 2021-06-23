import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Proteinas from './screens/Proteinas';
import Carbos from './screens/Carbos'
import Grasa from './screens/Grasa'
import Fibra from './screens/Fibra'

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title:'NUTRIVAL',
          headerStyle:{backgroundColor:'tomato'},
          headerTintColor:'white',
          headerTitleAlign:'center',
          
        }} />
        <Stack.Screen name="proteina" component={Proteinas} options={{
          title:'NUTRIVAL',
          headerStyle:{backgroundColor:'tomato'},
          headerTintColor:'white',
          headerTitleAlign:'center',
        }} />
        <Stack.Screen name="carbohidratos" component={Carbos} options={{
           title:'NUTRIVAL',
           headerStyle:{backgroundColor:'tomato'},
           headerTintColor:'white',
           headerTitleAlign:'center',
        }} />
        <Stack.Screen name="grasas" component={Grasa} options={{
           title:'NUTRIVAL',
           headerStyle:{backgroundColor:'tomato'},
           headerTintColor:'white',
           headerTitleAlign:'center',
        }} />
        <Stack.Screen name="fibras" component={Fibra} options={{
           title:'NUTRIVAL',
           headerStyle:{backgroundColor:'tomato'},
           headerTintColor:'white',
           headerTitleAlign:'center',
        }} />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
