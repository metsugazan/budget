

import React from 'react';
import { DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper';

import {
  StyleSheet,
  Button
} from 'react-native';


import AppNavigation from './src/navigation/AppNavigation';

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

  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
        </PaperProvider>
  );
};

const styles = StyleSheet.create({

});

