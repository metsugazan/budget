

import React, {useState, useEffect} from 'react';
import { DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper';

import {
  StyleSheet,
  Button
} from 'react-native';


import AppNavigation from './src/navigation/AppNavigation';

import UserContext from './src/components/UserContext';
import  auth from '@react-native-firebase/auth';


const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      primary: "#2E2E2E",
    },
  roundness: 10,
};

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
      console.log('Aucune connexion')
  }
  
  return (
    <PaperProvider theme={theme}>
      <UserContext.Provider value={{ user }}>
      <AppNavigation />
      </UserContext.Provider>
        </PaperProvider>
  );
};

const styles = StyleSheet.create({

});

