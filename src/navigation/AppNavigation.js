import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import HomeScreen from '../screens/HomeScreen';
import AddIncomeScreen from '../screens/AddIncomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" options={{ headerTitleAlign: 'center', headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="register" options={{ title: 'Création compte', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#2738C2' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={RegisterScreen} />
            <Stack.Screen name="home" options={{ headerShown: false }} component={TabNavigation} />
            <Stack.Screen name="Revenus" options={{ headerTitleAlign: 'center', headerStyle: {backgroundColor:'#2738C2'}, headerTitleStyle: {color:'white'}, headerTintColor:'white' }} component={AddIncomeScreen} />
            <Stack.Screen name="Depenses" options={{ headerTitleAlign: 'center', headerStyle: {backgroundColor:'#2738C2'}, headerTitleStyle: {color:'white'}, headerTintColor:'white' }} component={AddExpenseScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}


const TabNavigation = () => {
    return (
            <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: '#2738C2', inactiveTintColor: '#838383', style: { backgroundColor: '#fff' } }}>
                <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            </Tab.Navigator>
    )
}

export default StackNavigation
