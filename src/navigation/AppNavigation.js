import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator  initialRouteName="login">
            <Stack.Screen name="login" options={{ headerTitleAlign: 'center', headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="register" options={{ title: 'Création compte' ,headerTitleAlign: 'center', headerStyle: {backgroundColor:'#2738C2'}, headerTitleStyle: {color:'white'}, headerTintColor:'white' }} component={RegisterScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
