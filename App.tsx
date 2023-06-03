import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/HomeScreen';
import ScannerScreen from './pages/ScannerScreen';
import ResultScreen from './pages/ResultScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }} 
        />
        <Tab.Screen 
            name="Scanner" 
            component={ScannerScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="scan-outline" size={size} color={color} />
              ),
            }}  
        />
        <Tab.Screen 
            name="Result" 
            component={ResultScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="checkmark-done-circle-outline" size={size} color={color} />
              ),
            }}  
        />
      </Tab.Navigator>
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
